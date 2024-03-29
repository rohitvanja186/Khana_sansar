import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'; // Import icons from Font Awesome
import { MdEmail } from 'react-icons/md';
import axios from 'axios';
import {toast} from 'react-toastify';
import './Register.css';

const Register = () => {

  const [username,setUsername]= useState("");
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const [repassword,setRePassword]= useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
if(!username || !password || !email || !repassword){
  toast.error("Please fill in the full data")
  return

}
    if(password !== repassword){
     toast.error("Please enter the same password")
     return
    }

    const response = await axios.post("http://localhost:3000/register",{
      Username : username,
      Email : email,
      Password : password
     
    })

    if(response && response.data == "exists"){
      toast.error("User already exists")
      return
    }else if(response && response.data == "success"){
      toast.success("User register successful")
      return
    }

  }

 
  return (
    <div className='m_register'>
      <Link to="/"><button className='back'>Back</button></Link>
      <div className="registration-container">
        <h2>Sign Up</h2>
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="input-container">
          <label>Username</label>
            <FaUser className="icon" />
            <input type="text" id="username" name="username" placeholder="Username" value={username} onChange={(e)=>{
            setUsername (e.target.value);
            }} />
          </div>

          <div className="input-container">
          <label>Username</label>
            <MdEmail className="icon" />
            <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e)=>{
              setEmail (e.target.value);
            }} />
          </div>

          <div className="input-container">
          <label>Username</label>
            <FaLock className="icon" />
            <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(e)=>{
              setPassword (e.target.value);
            }} />
          </div>
          <div className="input-container">
          <label>Username</label>
            <FaLock className="icon" />
            <input type="password" id="repassword" name="repassword" placeholder="Confirm-Password" value={repassword} onChange={(e)=>{
              setRePassword (e.target.value);
            }} />
          </div>

          <div className="button-container">
            <button type="submit" className="btn">Sign Up</button>
            <Link to="/login"><button className="btn login-btn">Log In</button></Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
