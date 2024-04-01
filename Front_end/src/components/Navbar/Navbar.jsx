// Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../img/intro.png';

const Navbar = () => {
  return (
    <nav className='navbar'>
    <img src= {logo} className='logo'></img>
      <ul>
    
        <li>
          <Link to="/login">Login</Link>
        </li>

          <Link to="/register"><button>Join Us</button></Link> 
      </ul>
    </nav>
  );
}

export default Navbar;
