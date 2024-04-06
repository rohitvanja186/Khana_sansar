import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar2.css';
import logo from '../../img/intro.png';
import Cookies from 'js-cookie';

const Navbar2 = () => {
  const navigateTo = useNavigate();

  const handleLogout = () => {
    Cookies.remove('token'); // Clear the 'token' cookie
    navigateTo('/');
  };

  return (
    <nav className='navbar'>
      <img src={logo} className='logo' alt="Logo" />
      <ul>
        <li>
          <Link to="/main">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
        <li>
          <button className='join-btn' onClick={handleLogout}>Log Out</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar2;
