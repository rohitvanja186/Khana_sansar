// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import AboutUs from './components/AboutUs/AboutUs';
import Donateform from './components/Donateform/Donateform';
import Services from './components/Services/Services';
import Detail from './components/Detail/Detail';
import Editdetail from './components/Editdetail/Editdetail';
import Contactus from './components/Contactus/Contactus';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<><Navbar /><Home /></>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/donate" element={<Donateform />} />
          <Route path="/services" element={<Services />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/edit/:id" element={<Editdetail />} />
          <Route path="/contact" element={<Contactus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
