import React from 'react';
import Navbar from './Router/Navbar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Router/Home.jsx';
import Dashboard from './Router/Dashboard.jsx';
import About from './Router/About.jsx';
import './App.css'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
