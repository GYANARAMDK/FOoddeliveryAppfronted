import React from 'react'
import { Modal ,Button} from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Logincomponet() {
  const [showmodal, setshowmodal] = useState(false);
  const [password,setPassword]=useState('');
  const [number,setNumber]=useState('')
  const [loginmessage,setloginmessage]=useState('')
  const navigate=useNavigate();
  const handlecansel = () => {
    setshowmodal(false);
  };
  const handleshow = () => {
    setshowmodal(true);
  };
  const handleClose=()=>{
        setshowmodal(false)
        setNumber('')
        setPassword('')
        setloginmessage('')
  }
  const handlelogin= async()=>{
        const userData={
          number,
          password
        }
        try {
          const response=await fetch('https://webproject-mg7x.onrender.com/api/auth/login',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData) 
          });
          if(response.ok)
          {
            setshowmodal(false);
            setloginmessage('login successfully')
            const responseData=await response.json();
            const token=responseData.accesstoken;
            localStorage.setItem('authToken',token);
            console.log('succesfully login!')
            setTimeout(() => {
              navigate('/')
            }, 2000);
          }
          else {
            console.log("something went wrong");
           
          }
        } catch (error) {
           console.log("user not exist")
           console.log(error);
        }
  }
  return (
    <div>
      
        <center>
          <Button variant="primary" onClick={handleshow}>
            login
          </Button>
        </center>
        <br />
        <br />
        <br />
        <br />
        {loginmessage && <p style={{color:'green'}}> {loginmessage}</p>}
        <Modal show={showmodal} onHide={handlecansel}>
          <Modal.Header closeButton>
            <Modal.Title> login </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className='signup-form signup-form-container signup-form label signup-form inpu signup-form button signup-form button:hover success-message error-message signup-form-container'>
            <label>Number:</label>
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} required />
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
            <Button variant="primary" onClick={handlelogin}>
              login
            </Button>
          </Modal.Footer>
        </Modal>
      
    </div>
  );
}

