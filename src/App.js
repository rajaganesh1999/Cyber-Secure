// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
import HomePage from './pages/HomePage';
import FrameworkDetails from './pages/FrameworkDetails';
import ScamsAwareness from './pages/ScamsAwareness';
import Contact from './pages/Contact';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <Header />
      <Routes> {/* Updated from Switch to Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/framework" element={<FrameworkDetails />} />
        <Route path="/scams" element={<ScamsAwareness />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
