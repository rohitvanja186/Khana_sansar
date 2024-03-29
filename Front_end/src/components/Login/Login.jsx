import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa'; // Import icons from Font Awesome

import './Login.css';
import axios from 'axios';
import {toast} from 'react-toastify'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password
      });
  
      if (response && response.data.includes("Email not found")) {
        toast.error('Email not found');
      } else if (response && response.data.includes("Password does not match")) {
        toast.error('Password does not match');
      } else {
        toast.success('Login successful');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
      console.error('Login Error:', error);
    }
  };
  
  return (
    <div className="m_login">
      <Link to="/"><button className='back-button'>Back</button></Link>
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <FaEnvelope className="icon" />
            <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e)=>{
              setEmail(e.target.value);
            }} />
          </div>

          <div className="input-container">
            <FaLock className="icon" />
            <input type="password" id="password" name="password" placeholder="Password" value={password} onChange = {(e)=>{
              setPassword(e.target.value)
            }}/>
          </div>

          <div className="forgot-password">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <div className="button-container">
            <button type="submit" className="btn">Login</button>
            <Link to="/register"><button className="btn sign-up-btn">Sign Up</button></Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
