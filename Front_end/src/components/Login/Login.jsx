import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import pic from '../../img/register.png'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigateTo = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!email || !password){
      toast.error('Please enter the email address or password')
      }
  
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password
      })
  
      if (response && response.data.includes("Email not found")) {
        toast.error('Email not found');
      } else if (response && response.data.includes("Password does not match")) {
        toast.error('Password does not match');
      } else {
        toast.success('Login successful');
        navigateTo('/main')
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
      console.error('Login Error:', error);
    }
  };
  
  return (
    <div className="m_login">
      <Link to="/"><button className='back'>Back</button></Link>

      <div className='main-log'>
      <img src={pic} className='reg_img'></img>
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="input-container">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className="forgot-password">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <div className="button-container">
            <Link to="/register"><button className="login-btn">Sign Up</button></Link>
            <button type="submit" className="signUp-btn">Login</button>
          </div>
        </form>
      </div>

    </div>

     
    </div>
  );
};

export default Login;
