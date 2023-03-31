import React, { useState } from "react";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "./Context";
function Navbar() {
  const { myState, setMyState, lang, setLang, setMyStateFourth, myStateFourth } = useContext(MyContext);

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
                <img src={logo} alt="logo" style={{ height: "60px" }} />
              </div>
            </Link>
          </div>
          <div className="flex">
            <button
              className="text-lg text-gray-300 hover:text-pink-500"
              style={{
                borderBottom: lang === "en" ? "2px solid pink" : "none",
                padding: "8px 16px",
                borderRadius: "4px"
              }}
              onClick={() => {
                setLang('en')
              }}
            >
              ENGLISH
            </button>{" "}
            <button
              className="ml-4 text-lg text-gray-300 hover:text-pink-500"
              style={{
                borderBottom: lang === "tr" ? "2px solid pink" : "none",
                padding: "8px 16px",
                borderRadius: "4px"
              }}
              onClick={() => {
                setLang("tr");
              }}
            >
              TÜRKÇE
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
