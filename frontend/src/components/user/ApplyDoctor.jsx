import { Col, Form, Input, Row, TimePicker, message } from "antd";
import { Container } from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

function ApplyDoctor({ userId }) {
  const [doctor, setDoctor] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    specialization: "",
    experience: "",
    fees: "",
    timings: [],           // will hold ["09:00","10:00"]
  });

  const handleTimingChange = (values) => {
    // values is an array of dayjs objects or null
    if (!values || values.length !== 2) {
      setDoctor((prev) => ({ ...prev, timings: [] }));
      return;
    }
    const [start, end] = values;
    setDoctor((prev) => ({
      ...prev,
      timings: [
        dayjs(start).format("HH:mm"),
        dayjs(end).format("HH:mm"),
      ],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      // flatten payload so backend gets fields directly
      const payload = {
        userId,
        fullName: doctor.fullName,
        email: doctor.email,
        phone: doctor.phone,
        address: doctor.address,
        specialization: doctor.specialization,
        experience: doctor.experience,
        fees: doctor.fees,
        timings: doctor.timings, // ["09:00","10:00"]
      };

      const res = await axios.post(
        "http://localhost:8000/api/user/registerdoc",
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (res.data.success) {
        message.success(res.data.message || "Applied successfully");
      } else {
        message.error(res.data.message || "Apply failed");
      }
    } catch (error) {
      console.log(error.response?.data || error);
      message.error("Something went wrong while applying");
    }
  };

  return (
    <Container>
      <h2 className="text-center p-3">Apply for Doctor</h2>
      <Form onFinish={handleSubmit} className="m-3">
        <h4>Personal Details:</h4>
        <Row gutter={20}>
          <Col xs={24} md={12} lg={8}>
            <Form.Item label="Full Name" required>
              <Input
                name="fullName"
                value={doctor.fullName}
                onChange={handleChange}
                placeholder="Enter name"
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12} lg={8}>
            <Form.Item label="Phone" required>
              <Input
                name="phone"
                type="number"
                value={doctor.phone}
                onChange={handleChange}
                placeholder="Your phone"
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12} lg={8}>
            <Form.Item label="Email" required>
              <Input
                name="email"
                type="email"
                value={doctor.email}
                onChange={handleChange}
                placeholder="Your email"
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12} lg={8}>
            <Form.Item label="Address" required>
              <Input
                name="address"
                type="text"
                value={doctor.address}
                onChange={handleChange}
                placeholder="Your address"
              />
            </Form.Item>
          </Col>
        </Row>

        <h4>Professional Details:</h4>
        <Row gutter={20}>
          <Col xs={24} md={12} lg={8}>
            <Form.Item label="Specialization" required>
              <Input
                name="specialization"
                type="text"
                value={doctor.specialization}
                onChange={handleChange}
                placeholder="Your specialization"
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12} lg={8}>
            <Form.Item label="Experience" required>
              <Input
                name="experience"
                type="number"
                value={doctor.experience}
                onChange={handleChange}
                placeholder="Your experience"
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12} lg={8}>
            <Form.Item label="Fees" required>
              <Input
                name="fees"
                type="number"
                value={doctor.fees}
                onChange={handleChange}
                placeholder="Your fees"
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12} lg={8}>
            <Form.Item label="Timings" name="timings" required>
              <TimePicker.RangePicker format="HH:mm" onChange={handleTimingChange} />
            </Form.Item>
          </Col>
        </Row>

        <div className="d-flex justify-content-end">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </Form>
    </Container>
  );
}

export default ApplyDoctor;
