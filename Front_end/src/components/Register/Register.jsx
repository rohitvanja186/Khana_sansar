import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import './Register.css';
import pic from '../../img/register.png'


const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const navigateTo = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password || !email || !repassword) {
      toast.error("Please fill in the full data");
      return;
    }
    if (password !== repassword) {
      toast.error("Please enter the same password");
      return;
    }

    const response = await axios.post("http://localhost:3000/register", {
      Username: username,
      Email: email,
      Password: password
    });

    if (response && response.data === "exists") {
      toast.error("User already exists");
    } else if (response && response.data === "success") {
navigateTo('/login')
      toast.success("User register successful");
    }
  };

  return (
    <div className='m_register'>
      <Link to="/"><button className='back'>Back</button></Link>
      <div className='main-reg'>
      <img src={pic} className='reg_img'></img>

      <div className="registration-container">
    
    <h2>Sign Up</h2>
    <form className="registration-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="username">Username:</label>
      
        <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>

      <div className="input-container">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="input-container">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      <div className="input-container">
        <label htmlFor="repassword">Confirm Password:</label>
        <input type="password" id="repassword" name="repassword" value={repassword} onChange={(e) => setRePassword(e.target.value)} />
      </div>

      <div className="button-container">
        <button type="submit" className="signUp-btn">Sign Up</button>
        <Link to="/login"><button className=" login-btn">Log In</button></Link>
      </div>
    </form>
  </div>

      </div>
    
    </div>
  );
};

export default Register;
