import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { message } from 'antd'
import p2 from '../../images/p2.png'
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio,
}
  from 'mdb-react-ui-kit';
import axios from 'axios';

const Register = () => {

  const navigate = useNavigate()
  const [user, setUser] = useState({
    fullName: '', email: '', password: '', phone: '', type: ''
  })

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:8000/api/user/register', user)
      if (res.data.success) {
        message.success('Registered Successfully')
        navigate('/login')
      }
      else {
        message.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
      message.error('Something went wrong')
    }
  }

  return (
  
      
      <div className="container-fluid p-0">
        <MDBCard style={{ border: 'none' }}>
          <MDBRow style={{ background: 'rgb(190, 203, 203)', minHeight: '100vh' }} className='g-0 border-none p-3'>

            <MDBCol md='6'>
              <MDBCardBody className='d-flex mx-3 flex-column'>

                <div className='d-flex flex-row mb-2'>
                  <span className="h1 text-center fw-bold">Sign up to your account</span>
                </div>
                <div className="p-2">
                  <Form onSubmit={handleSubmit} >
                    <label className="my-1 form-label" htmlFor="formControlLg">Full name</label>
                    <MDBInput style={{ height: '40px', width: '500px' }} name='fullName' value={user.fullName} onChange={handleChange} id='fullNameInput' type='text' size="lg" />
                    
                    <label className="my-1 form-label" htmlFor="formControlLg">Email</label>
                    <MDBInput style={{ height: '40px', width: '500px' }} name='email' value={user.email} onChange={handleChange} id='emailInput' type='email' size="lg" />
                    
                    <label className="my-1 form-label" htmlFor="formControlLg">Password</label>
                    <MDBInput style={{ height: '40px', width: '500px' }} name='password' value={user.password} onChange={handleChange} id='passwordInput' type='password' size="lg" />
                    
                    <label className="my-1 form-label" htmlFor="formControlLg">Phone</label>
                    <MDBInput style={{ height: '40px', width: '500px' }} name='phone' value={user.phone} onChange={handleChange} id='phoneInput' type='phone' size="lg" />

                    <Container className='my-3'>
                      <MDBRadio
                        name='type'
                        id='inlineRadio1'
                        checked={user.type === 'admin'}
                        value='admin'
                        onChange={handleChange}
                        label='Admin'
                        inline
                      />
                      <MDBRadio
                        name='type'
                        id='inlineRadio2'
                        checked={user.type === 'user'}
                        value='user'
                        onChange={handleChange}
                        label='User'
                        inline
                      />
                    </Container>

                    <Button style={{marginTop: '20px', width: '500px'}} className="mb-4 bg-dark" variant='dark' size='lg' type="submit">Register</Button>
                  </Form>
                  <p className="mb-5 pb-md-2" style={{ color: '#393f81' }}>Have an account? <Link to={'/login'} style={{ color: '#393f81' }}>Login here</Link></p>

                </div>

              </MDBCardBody>
            </MDBCol>

            <MDBCol md='6'>
              <MDBCardImage style={{ mixBlendMode: 'darken' }} src={p2} alt="login form" className='rounded-start w-100' />
            </MDBCol>

          </MDBRow>
        </MDBCard>

      </div>
  
  )
}

export default Register
