import React from "react";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";
import  { useContext } from 'react';
import { MyContext } from './Context';
function Navbar() {
  const { myState, setMyState, lang, setLang } = useContext(MyContext);
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              to="/portfolio-website"
              className="text-xl font-medium text-pink-500 hover:text-pink-400"
            >
              <div>
             
                <img
                  src={logo}
                  alt="logo"
                  style={{ height: "60px" }}
   
                />
              </div>
            </Link>
          </div>
          <div className="flex">
            <button className="mr-4 text-lg text-gray-300 hover:text-pink-500" onClick={() => {setLang('tr')}}>
              TÜRKÇE
            </button>
            <button className="text-lg text-gray-300 hover:text-pink-500" onClick={() => {setLang('en')}}>
              ENGLISH
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
