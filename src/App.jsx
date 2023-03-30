import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Home from "./Home";
function App() {
  

  return (
    <Router>
      <div className="bg-black min-h-screen flex flex-col items-center justify-center">
       <Home/>
        <div className="flex justify-center ">
          <div className="flex items-center space-x-4">
            <Link
              to="portfolio-website/skills"
              className="bg-gradient-to-br from-pink-500 to-purple-500 text-white py-2 px-4 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Skills
            </Link>
            <Link
              to="/projects"
              className="bg-gradient-to-br from-blue-500 to-teal-500 text-white py-2 px-4 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white py-2 px-4 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              onClick={() => {alert(1)}}
            >
              Contact
            </Link>
          </div>
        </div>
        <Routes>
          <Route path="portfolio-website/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
