// app.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Skeleton from './Skeleton';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import About from './components/About';
import Contack from './components/Contack';
import SkeletonWorking from './SkeletonWorking';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SkeletonWorking />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contack />} />
        </Route>
        <Route path='/o' element={<Skeleton />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
