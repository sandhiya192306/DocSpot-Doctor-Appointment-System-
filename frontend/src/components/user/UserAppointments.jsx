import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import { Container, Button } from "react-bootstrap";
import axios from "axios";
import { message } from "antd";

const UserAppointments = () => {
  const [userid, setUserId] = useState(null);
  const [isDoctor, setIsDoctor] = useState(false);
  const [userAppointments, setUserAppointments] = useState([]);
  const [doctorAppointments, setDoctorAppointments] = useState([]);

  // Read user info on mount
  useEffect(() => {
    const stored = localStorage.getItem("userData");
    if (!stored) {
      alert("No user to show");
      return;
    }

    const user = JSON.parse(stored);
    setUserId(user._id);
    setIsDoctor(user.isdoctor);
  }, []);

  // Fetch appointments after userid is known
  useEffect(() => {
    if (!userid) return;

    if (isDoctor) {
      getDoctorAppointment(userid);
    } else {
      getUserAppointment(userid);
    }
  }, [userid, isDoctor]);

  const getUserAppointment = async (id) => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/user/getuserappointments",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          params: { userId: id },
        }
      );

      if (res.data.success) {
        setUserAppointments(Array.isArray(res.data.data) ? res.data.data : []);
      } else {
        message.error(res.data.message || "Failed to load appointments");
      }
    } catch (error) {
      console.log(error);
      message.error("Something went wrong while fetching appointments");
    }
  };

  const getDoctorAppointment = async (id) => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/doctor/getdoctorappointments",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          params: { userId: id },
        }
      );

      if (res.data.success) {
        setDoctorAppointments(Array.isArray(res.data.data) ? res.data.data : []);
      } else {
        message.error(res.data.message || "Failed to load appointments");
      }
    } catch (error) {
      console.log(error);
      message.error("Something went wrong while fetching appointments");
    }
  };

  const handleStatus = async (userIdParam, appointmentId, status) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/doctor/handlestatus",
        {
          userid: userIdParam,
          appointmentId,
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (res.data.success) {
        message.success(res.data.message);

        if (isDoctor) {
          getDoctorAppointment(userid);
        } else {
          getUserAppointment(userid);
        }
      } else {
        message.error(res.data.message || "Failed to update status");
      }
    } catch (error) {
      console.log(error);
      message.error("Something went wrong while updating status");
    }
  };

  const handleDownload = async (url, appointId) => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/doctor/getdocumentdownload",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          params: { appointId },
          responseType: "blob",
        }
      );

      if (res.data) {
        const fileUrl = window.URL.createObjectURL(
          new Blob([res.data], { type: "application/pdf" })
        );

        const downloadLink = document.createElement("a");
        document.body.appendChild(downloadLink);

        const fileName = url?.split("/").pop() || "document.pdf";

        downloadLink.setAttribute("href", fileUrl);
        downloadLink.setAttribute("download", fileName);
        downloadLink.style.display = "none";
        downloadLink.click();
      } else {
        message.error("No document found to download");
      }
    } catch (error) {
      console.log(error);
      message.error("Something went wrong while downloading document");
    }
  };

  return (
    <div>
      <h2 className="p-3 text-center">All Appointments</h2>
      <Container>
        {isDoctor ? (
          /* ------------------------------------------------------ *
           * ------------------ DOCTOR APPOINTMENTS ---------------- *
           * ------------------------------------------------------ */
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Phone</th>
                <th>Document</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {doctorAppointments.length > 0 ? (
                doctorAppointments.map((appointment) => (
                  <tr key={appointment._id}>
                    <td>{appointment?.userInfo?.fullName || "Unknown"}</td>
                    <td>{appointment?.date || "N/A"}</td>
                    <td>{appointment?.userInfo?.phone || "N/A"}</td>

                    {/* Document Safe Access */}
                    <td>
                      {appointment?.document?.filename ? (
                        <Button
                          variant="link"
                          onClick={() =>
                            handleDownload(
                              appointment.document.path,
                              appointment._id
                            )
                          }
                        >
                          {appointment.document.filename}
                        </Button>
                      ) : (
                        <span style={{ color: "gray" }}>No Document</span>
                      )}
                    </td>

                    <td>{appointment?.status}</td>

                    <td>
                      {appointment?.status === "approved" ? null : (
                        <Button
                          onClick={() =>
                            handleStatus(
                              appointment?.userInfo?._id,
                              appointment._id,
                              "approved"
                            )
                          }
                        >
                          Approve
                        </Button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6}>
                    <Alert variant="info">
                      <Alert.Heading>No Appointments to show</Alert.Heading>
                    </Alert>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        ) : (
          /* ------------------------------------------------------ *
           * ------------------ USER APPOINTMENTS ------------------ *
           * ------------------------------------------------------ */
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Doctor Name</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {userAppointments.length > 0 ? (
                userAppointments.map((appointment) => (
                  <tr key={appointment._id}>
                    <td>{appointment?.docName || "Unknown"}</td>
                    <td>{appointment?.date || "N/A"}</td>
                    <td>{appointment?.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3}>
                    <Alert variant="info">
                      <Alert.Heading>No Appointments to show</Alert.Heading>
                    </Alert>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        )}
      </Container>
    </div>
  );
};

export default UserAppointments;
