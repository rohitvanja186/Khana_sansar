import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar2.css';
import logo from '../../img/intro.png';

const Navbar2 = () => {
  return (
    <nav className='navbar'>
      <img src={logo} className='logo' alt="Logo"></img>
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
          
            <button className='join-btn'>Log Out</button>
          
        </li>
      </ul>
    </nav>
  );
}

export default Navbar2;
