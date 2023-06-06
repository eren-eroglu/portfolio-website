import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "./Context";
import logo from "./assets/logo.png";

function Navbar() {
  const {
    myState,
    setMyState,
    lang,
    setLang,
    setMyStateFourth,
    myStateFourth,
  } = useContext(MyContext);

  const renderButton = (text, value) => {
    const isActive = lang === value;
    const buttonStyle = {
      borderBottom: isActive ? "2px solid pink" : "none",
      padding: "8px 16px",
      borderRadius: "4px",
      margin: "7px",
    };

    return (
      <button
        className={`text-lg text-gray-300 hover:text-pink-500 ${
          isActive ? "shadow-lg shadow-rose-900" : ""
        }`}
        style={buttonStyle}
        onClick={() => setLang(value)}
      >
        {text}
      </button>
    );
  };

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
            {renderButton("ENGLISH", "en")}
            {renderButton("TÜRKÇE", "tr")}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
