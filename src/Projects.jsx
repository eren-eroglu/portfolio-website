import React from "react";
import cyberShots from "./assets/cyber-shots.jpg";
import cyberBlogs from "./assets/cyber-blog.jpg";
import timelessLove from "./assets/timeless-love.jpg";
import { AiFillGithub } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className="text-white">
      <div className="text-center typewriter">
        <h1 className="text-sm md:text-2xl lg:text-3xl tracking-tight bg-slate-600 bg-opacity-20 p-2 rounded-2xl p-3 ">
          ⭐ Here are my favorite projects: ⭐{" "}
        </h1>
      </div>
      <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6">
          <img className="w-full mb-4" src={cyberShots} alt="Project 1" />
          <h2 className="text-lg font-bold mb-2">
            Project 1: <span className="text-purple-400">Cyber Shots</span>{" "}
          </h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ullamcorper eros a erat eleifend, ut congue nisl feugiat. Sed vel
            sem euismod, posuere metus sit amet, malesuada magna.
          </p>
        </div>
        <div className="bg-gray-800  bg-opacity-50 rounded-lg p-6">
          <img className="w-full mb-4" src={cyberBlogs} alt="Project 2" />
          <h2 className="text-lg font-bold mb-2">
            Project 2: <span className="text-purple-400">Cyber Blogs</span>
          </h2>
          <p className="text-gray-400">
            Suspendisse potenti. In eu libero eget elit blandit iaculis. Sed ut
            leo nisl. Aliquam nec fermentum mi, a porta mi. Donec eget eros a
            nunc tempor consectetur. Donec eget.
          </p>
        </div>
        <div className="bg-gray-800  bg-opacity-50 rounded-lg p-6">
          <img className="w-full mb-4" src={timelessLove} alt="Project 3" />
          <h2 className="text-lg font-bold mb-2">
            Project 3: <span className="text-purple-400">Timeless Love</span>
          </h2>
          <p className="text-gray-400">
            Nam non urna non nisl faucibus auctor vitae eu ipsum. Ut tristique
            felis vitae faucibus interdum. Fusce eu elit vel magna fermentum
            eleifend. Donec sollicitudin lacus ac velit viverra feugiat.
          </p>
          
        </div> 

        
        
      </div>
      <div className="text-center"> <Link className="btn btn-primary m-3" to='/portfolio-website'>Back Home</Link></div>
      <a href="https://github.com/eren-eroglu"> <div className="bg-black bg-opacity-50 text-center flex justify-center flex-col items-center ">Show More <AiFillGithub size={50} /></div></a>  
    </div>
  );
}

export default Projects;
