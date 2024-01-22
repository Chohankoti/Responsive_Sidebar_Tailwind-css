// app.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Skeleton from './Skeleton';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import About from './components/About';
import Contack from './components/Contack';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Skeleton />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contack />} />
      </Routes>
    </BrowserRouter>



  );
}

export default App;
