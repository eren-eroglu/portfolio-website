import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import bg from './assets/bg.jpg'
import { FiMail } from "react-icons/fi";
function App() {
  

  return (
    <Router>
<Navbar />
<div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center center" }}>
      

      
        <Routes>
        <Route path="portfolio-website" element={<Home />} />
          <Route path="portfolio-website/skills" element={<Skills />} />
          <Route path="/portfolio-website/projects" element={<Projects />} />
          <Route path="/portfolio-website/contact" element={<Contact />} />
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
