// Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../img/into.png';

const Navbar = () => {
  return (
    <nav className='navbar'>
    <img src= {logo} width= '60px'></img>
      <ul>
    
      
        <li>
          <Link to="/login">Login</Link>
        </li>

       
          <Link to="/register"><button> Donate</button></Link> 
      </ul>
    </nav>
  );
}

export default Navbar;
