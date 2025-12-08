import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { message } from "antd";
import { Button, Form } from "react-bootstrap";
import photo1 from "../../images/photo1.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/api/user/login",
        user
      );

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userData", JSON.stringify(res.data.userData));

        message.success("Login successfully");

        const isLoggedIn = JSON.parse(localStorage.getItem("userData"));
        const { type } = isLoggedIn;

        switch (type) {
          case "admin":
            navigate("/adminHome");
            break;
          case "user":
            navigate("/userhome");
            break;
          default:
            navigate("/login");
            break;
        }
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something went wrong");
    }
  };

  return (
    <>
    <div className="container-fluid p-0">
        <MDBCard style={{ border: "none" }}>
          <MDBRow
            style={{ background: "rgb(190, 203, 203)", minHeight: "100vh"  }}
            className="g-0 p-0"
          >
            <MDBCol md="6">
              <MDBCardImage
                src={photo1}
                alt="login form"
                className="rounded-start w-100"
              />
            </MDBCol>

            <MDBCol md="6 m-auto">
              <MDBCardBody className="d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex flex-row mt-2 mb-5">
                  <span className="h1 fw-bold mb-0">
                    Sign in to your account
                  </span>
                </div>

                <Form className="w-75" onSubmit={handleSubmit}>
                  <label
                    className="form-label"
                    htmlFor="formControlLgEmail"
                  >
                    Email
                  </label>
                  <MDBInput
                    style={{ margin: "5px auto" }}
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    id="formControlLgEmail"
                    type="email"
                    size="lg"
                    autoComplete="off"
                  />

                  <label
                    className="form-label"
                    htmlFor="formControlLgPassword"
                  >
                    Password
                  </label>
                  <MDBInput
                    style={{ margin: "5px auto" }}
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    id="formControlLgPassword"
                    type="password"
                    size="lg"
                    autoComplete="off"
                  />

                  <Button
                    className="mt-4 w-100 mb-4 px-5 bg-dark"
                    size="lg"
                    type="submit"
                  >
                    Login
                  </Button>
                </Form>

                <p
                  className="mb-5 pb-lg-2"
                  style={{ color: "#393f81" }}
                >
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    style={{ color: "#393f81" }}
                  >
                    Register here
                  </Link>
                </p>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      
      </div>

    </>
  );
};

export default Login;
