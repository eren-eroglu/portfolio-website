import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import pp from "./assets/ai.png";
import "animate.css";
import { useContext } from "react";
import { MyContext } from "./Context";
import { FiMail } from "react-icons/fi";
const Home = () => {
  const {
    myState,
    setMyState,
    myStateSecond,
    setMyStateSecond,
    lang,
    setLang,
    skills,
    setSkills,
    projects,
    setProjects,
    contact,
    setContact,
  } = useContext(MyContext);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTyping(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    if (lang == "en") {
      setMyState("Hello, I'm Eren Eroğlu");
      setMyStateSecond("What would you like to know?");
      setSkills('skills')
      setProjects('Projects')
      setContact('Contact')
    } else if (lang == "tr") {
      setMyState("Merhaba, Ben Eren Eroğlu.");
      setMyStateSecond("Ne için gelmiştiniz?");
      setSkills('Beceriler')
      setProjects('Projeler')
      setContact('İletişim')
    }
  }, [lang]);
  return (
    <div className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
      <img
        src={pp}
        alt="Profile Picture"
        className="w-48 h-48 rounded-full mx-auto mb-8 border border-2 border-purple-500"
      />

      <div className="text-center typewriter">
        <h1 className="text-2xl md:text-6xl lg:text-7xl tracking-tight bg-slate-600 bg-opacity-30 p-2 rounded-2xl">
          {myState}
        </h1>
      </div>
      <div className="text-sm">
        <p
          className={
            isTyping
              ? "typewriter text-center animate__animated animate__heartBeat mt-2"
              : "hidden text-sm "
          }
        >
          {myStateSecond}{" "}
        </p>
      </div>
      <div>
        <div className="flex justify-center mt-12 space-x-4 text-xl  animate__animated animate__flash">
          <Link
            to="/portfolio-website/skills"
            className="btn bg-black bg-opacity-40 btn-secondary btn-outline "
          >
            {skills}
          </Link>
          <Link
            to="/portfolio-website/projects"
            className="btn bg-black bg-opacity-40 btn-secondary btn-outline "
          >
        {projects}
          </Link>
          <Link
            to="/portfolio-website/contact"
            className="btn bg-black bg-opacity-40 btn-secondary btn-outline "
          >
         {contact}
          </Link>
        </div>
      </div>
      <div className="flex justify-center mt-12"> <a href="mailto:ereneroglu.dev@gmail.com"><footer className="bg-pink-500 hover:bg-pink-800 hover:cursor-pointer transition-all duration-200 bg-opacity-40 rounded-full py-4">
       <div className="container mx-auto px-4">
       <div className="flex flex-wrap items-center justify-between">
         
          
            <FiMail className="text-white text-xl hover:text-white" />
         
        </div> 
      </div>
    </footer></a></div>
    </div>
  );
};

export default Home;
