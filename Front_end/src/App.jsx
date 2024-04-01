// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Main from './components/Main/Main';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<><Navbar /><Home /></>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
