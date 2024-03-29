import React from 'react';
import '../tailwind.css';
import Navbar from './Components/navbar';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/home';
import Tentang from './pages/tentang';
import LandingPage from './pages/landingpage'
import Tutorial from './pages/tutorial';

const App = () => {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />}  />
      <Route path="/home" element={<Home />}  />
      <Route path="/tentang" element={<Tentang />} />
      <Route path="/tutorial" element={<Tutorial />} />
    </Routes>

  </Router>
  
  );
};

export default App;
