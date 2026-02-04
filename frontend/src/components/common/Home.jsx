import React from 'react'
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container, Button } from 'react-bootstrap';
import {  Row, Col ,Card} from "react-bootstrap";


import {
  BsCalendarCheck,
  BsSearch,
  BsShieldCheck,
  BsClock,
  BsHeart,
  BsPhone
} from "react-icons/bs";

import p3 from '../../images/p3.webp'
import doctor from '../../images/doctor.png'
import image1 from '../../images/image1.avif'
import image2 from '../../images/image2.avif'
import image3 from '../../images/image3.avif'
import patient1 from '../../images/patient1.jpg'
import patient2 from '../../images/patient2.jpg'
import patient3 from '../../images/patient3.webp'





const doctors = [
  {
    id: 1,
    name: "Dr. Arjun Kumar",
    specialty: "Cardiologist",
    hospital: "ABC Heart Center, Coimbatore",
    experience: "10+ years experience",
    fee: "₹600 / consultation",
    img: image1,
  },
  {
    id: 2,
    name: "Dr. Meera S.",
    specialty: "Dermatologist",
    hospital: "SkinCare Clinic, Chennai",
    experience: "8+ years experience",
    fee: "₹500 / consultation",
    img: image2,
  },
  {
    id: 3,
    name: "Dr. Rahul Varma",
    specialty: "Pediatrician",
    hospital: "Children’s Hospital, Bangalore",
    experience: "12+ years experience",
    fee: "₹550 / consultation",
    img: image3,
  },
];

const testimonials = [
  {
    name: "Arun, Coimbatore",
    text: "Booked a dermatologist in 2 minutes. No waiting in clinic.",
  },
  {
    name: "Meera, Chennai",
    text: "Easy to see all available slots and choose a convenient time.",
  },
  {
    name: "Rahul, Bangalore",
    text: "Got instant confirmation and reminders before the visit.",
  },
];

const specialties = [
  { name: "Cardiology", desc: "Heart & blood pressure care" },
  { name: "Dermatology", desc: "Skin, hair & nail treatments" },
  { name: "Pediatrics", desc: "Child health & vaccinations" },
];

const feedbacks = [
  {
    id: 1,
    name: "Priya S.",
    location: "Coimbatore",
    text: "DocSpot helped me find a nearby gynecologist and book within minutes.",
    img: patient1,
  },
  {
    id: 2,
    name: "Karthik R.",
    location: "Chennai",
    text: "No long phone calls. I could see all slots and choose the perfect time.",
    img: patient2,
  },
  {
    id: 3,
    name: "Ananya M.",
    location: "Bangalore",
    text: "Got reminders before my appointment and the visit was smooth.",
    img: patient3,
  }];
 const Home =()=> {
  return (
    <>
      <Navbar expand="lg" className="custom-navbar">
        <Container fluid>
          <Navbar.Brand>
            <Link to={'/'}>DOCSPOT</Link>
          </Navbar.Brand>
          <Nav>
  <Nav.Link as={Link} to="/" className="mx-2 active">Home</Nav.Link>
  <Nav.Link as={Link} to="/login" className="mx-2">Login</Nav.Link>
  <Nav.Link as={Link} to="/register" className="mx-">Register</Nav.Link>
</Nav>


        
        </Container>
      </Navbar>
       
<div className="container-fluid p-0">
  <div className="hero-section">
  <div className="bg-overly d-flex flex-column justify-content-center align-items-center text-center">

    <h1 className="hero-quote">
      “Your Health, Our Priority – Book Trusted Doctors Easily.”
    </h1>

    <Button color="info" className="mt-3 register hero-btn">
      <Link to="/login" className="book-link">
        Book your Doctor
      </Link>
    </Button>

  </div>
</div>

<section className="about-section py-5">
  <Container>
    <Row className="align-items-center" style={{ columnGap: "40px" }}>
      
      {/* LEFT IMAGE */}
      <Col md={5}>
        <img
          src={p3}
          alt="DocSpot doctors"
          className="about-img"
        />
      </Col>

      {/* RIGHT CONTENT */}
      <Col md={6}>
        <h2 className="about-title mb-4">About DocSpot</h2>

        <p className="about-text">
          DocSpot is a modern online platform that helps patients find trusted
          doctors, check availability, and book appointments in just a few clicks.
        </p>

        <ul className="about-list">
          <li>✔ Simple & fast booking</li>
          <li>✔ Trusted healthcare professionals</li>
          <li>✔ Secure access to records</li>
          <li>✔ Smart reminders and notifications</li>
        </ul>
      </Col>

    </Row>
  </Container>
</section>




   

        
      
    
  <div className="fade-in">
    <section className="py-5 bg-light">
      <Container>
        {/* Section Header */}
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h2 className="display-5 fw-bold text-prmry mb-3">Why Choose DocSpot?</h2>
            <p className="lead text-muted">
              Book doctors instantly with our smart platform. Trusted by thousands of patients daily.
            </p>
          </Col>
        </Row>

        {/* Features Grid */}
        <Row className="g-4">
          <Col lg={4} md={6}>
            <div className="text-center p-4 h-100">
              <div className="icon-circle bg-primary bg-opacity-10 text-prmry mb-4 mx-auto">
                <BsSearch size={48} />
              </div>
              <h5 className="fw-bold mb-3">Find Any Specialist</h5>
              <p className="text-muted">
                Search 1000+ doctors by specialty, location, fees, and availability in seconds.
              </p>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className="text-center p-4 h-100">
              <div className="icon-circle bg-success bg-opacity-10 text-success mb-4 mx-auto">
                <BsCalendarCheck size={48} />
              </div>
              <h5 className="fw-bold mb-3">Instant Booking</h5>
              <p className="text-muted">
                Real-time slots with one-click confirmation. No waiting rooms, no phone calls.
              </p>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className="text-center p-4 h-100">
              <div className="icon-circle bg-info bg-opacity-10 text-info mb-4 mx-auto">
                <BsClock size={48} />
              </div>
              <h5 className="fw-bold mb-3">24/7 Availability</h5>
              <p className="text-muted">
                Book appointments anytime. Doctors update slots instantly for your convenience.
              </p>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className="text-center p-4 h-100">
              <div className="icon-circle bg-warning bg-opacity-10 text-warning mb-4 mx-auto">
                <BsShieldCheck size={48} />
              </div>
              <h5 className="fw-bold mb-3">Secure Payments</h5>
              <p className="text-muted">
                Encrypted payments with instant refunds. Pay only after doctor confirmation.
              </p>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className="text-center p-4 h-100">
              <div className="icon-circle bg-danger bg-opacity-10 text-danger mb-4 mx-auto">
                <BsHeart size={48} />
              </div>
              <h5 className="fw-bold mb-3">Verified Doctors</h5>
              <p className="text-muted">
                All doctors medically verified with patient ratings and reviews.
              </p>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className="text-center p-4 h-100">
              <div className="icon-circle bg-secondary bg-opacity-10 text-secondary mb-4 mx-auto">
                <BsPhone size={48} />
              </div>
              <h5 className="fw-bold mb-3">Mobile App Coming Soon</h5>
              <p className="text-muted">
                Book on the go with our upcoming Android & iOS apps.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </div>




    <section className="py-5">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2 className="fw-bold text-prmry">Top Specialities</h2>
            <p className="text-muted">
              Book trusted specialists for your health needs.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {doctors.map((doc) => (
            <Col key={doc.id} md={4}>
              <Card className="h-100 shadow-sm ">
                <Card.Img
                  variant="center"
                  src={doc.img}
                  alt={doc.name}
                  style={{ height: "350px", objectFit: "fill"}}
                />
                <Card.Body>
                  <Card.Title>{doc.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {doc.specialty}
                  </Card.Subtitle>
                  <Card.Text className="mb-1">{doc.hospital}</Card.Text>
                  <Card.Text className="mb-1 small text-muted">
                    {doc.experience}
                  </Card.Text>
                  <Card.Text className="fw-semibold text-prmry">
                    {doc.fee}
                  </Card.Text>
                  <Button variant="primary" size="sm">
                    Book Appointment
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  



   
   

    <section className="py-5 bg-light">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2 className="fw-bold text-prmry">What Our Patients Say</h2>
            <p className="text-muted">
              Real feedback from people who booked through DocSpot.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {feedbacks.map((fb) => (
            <Col key={fb.id} md={4}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="text-center">
                  <img
                    src={fb.img}
                    alt={fb.name}
                    style={{
                      width: "90px",
                      height: "90px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginBottom: "12px",
                    }}
                  />
                  <p className="mb-3 fst-italic">“{fb.text}”</p>
                  <h6 className="mb-0">{fb.name}</h6>
                  <small className="text-muted">{fb.location}</small>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>

  




  
  



 <footer className="bg-succ text-light pt-4 pb-3 ">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Contact Us</h5>
            <p className="mb-1">Email: support@docspot.com</p>
            <p className="mb-1">Phone: +91 98765 43210</p>
            <p className="mb-0">Address: Coimbatore, Tamil Nadu, India</p>
          </Col>

          <Col md={6} className="text-md-end mt-3 mt-md-0">
            <h5>Need help?</h5>
            <p className="mb-1">Mon – Sat, 9:00 AM – 8:00 PM</p>
            <p className="mb-0">Book appointments and manage your visits easily.</p>
          </Col>
        </Row>

        <hr className="border-secondary my-3" />
        <Row>
          <Col className="text-center">
            <small>© {new Date().getFullYear()} DocSpot. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
</div>
    </>
  )
}

export default Home
