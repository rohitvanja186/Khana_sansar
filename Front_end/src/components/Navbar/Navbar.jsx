import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../img/intro.png';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} className='logo' alt="Logo"></img>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/aboutus">About us</Link>
        </li>
        <li>
          <Link to="/ourmission">Our mission</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">
            <button className='join-btn'>Join Us</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
