// import React from 'react'
import  { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
// import './SignupModal.css';
 import {useNavigate } from 'react-router-dom';

export default function Signupcomponent() {

    const [showModal, setShowModal] = useState(false);

    const [name, setname] = useState('');
    const navigate=useNavigate();
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registrationMessage, setRegistrationMessage] = useState('');
    // const navigate = useNavigate();
 
    const handleClose = () => {
        setShowModal(false);
        setRegistrationMessage('');
        setname('');
        setNumber('');
        setEmail('');
        setPassword('');
      };
    
    const handleShow = () => setShowModal(true);

    const handleSignup = async () => {
        const userData = {
          name,
          number,
          email,
          password
        };
    
        try {
          const response = await fetch('https://webproject-mg7x.onrender.com/api/auth/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
          });
    
          if (response.ok) {
            setRegistrationMessage('Registration successful!');
            <h1>{registrationMessage}</h1>
             setTimeout(() => {
              navigate('/')
             }, 2000);
            
          } else {
            console.error('Error registering user');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

  return (
    <div>
      <center><Button variant="primary" onClick={handleShow}>
        Sign Up
      </Button></center>
      <br /><br /><br /><br />

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {registrationMessage && <p style={{ color: 'green' }}>{registrationMessage}</p>}



          <div className='signup-form signup-form-container signup-form label signup-form inpu signup-form button signup-form button:hover success-message error-message signup-form-container' >
            <label>Username:</label>
            <input type="text" value={name} onChange={(e) => setname(e.target.value)} required />
          </div>



          <div className='signup-form signup-form-container signup-form label signup-form inpu signup-form button signup-form button:hover success-message error-message signup-form-container'>
            <label>Number:</label>
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} required />
          </div>
          <div className='signup-form signup-form-container signup-form label signup-form inpu signup-form button signup-form button:hover success-message error-message signup-form-container'>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className='signup-form signup-form-container signup-form label signup-form inpu signup-form button signup-form button:hover success-message error-message signup-form-container'>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSignup}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
