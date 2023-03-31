import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MyContext } from "./Context";
import icon from "./assets/tailwind.png";
function Skills() {
  const { myStateThird, setMyStateThird, lang, home, setHome } =
    useContext(MyContext);
  useEffect(() => {
    if (lang == "en") {
      setMyStateThird("Here are my skills: ");
      setHome("Back Home");
    } else if (lang == "tr") {
      setMyStateThird("Becerilerim aşağıdaki gibidir:");
      setHome("Geri Dön");
    }
  }, [lang]);
  return (
    <div className="bg-gray-800 bg-opacity-30 mt-3 rounded-3xl py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center typewriter">
          <h1 className="text-lg md:text-4xl lg:text-7xl tracking-tight bg-slate-600 bg-opacity-30 p-2 rounded-2xl text-white">
            {myStateThird}{" "}
          </h1>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          <div className="flex flex-col items-center">
            <i className="fab fa-html5 text-6xl text-yellow-500"></i>
            <p className="mt-2 text-lg font-medium text-white">HTML5</p>
          </div>

          <div className="flex flex-col items-center">
            <i className="fab fa-css3-alt text-6xl text-blue-500"></i>
            <p className="mt-2 text-lg font-medium text-white">CSS3</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fab fa-js text-6xl text-yellow-500"></i>
            <p className="mt-2 text-lg font-medium text-white">JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fab fa-react text-6xl text-blue-500"></i>
            <p className="mt-2 text-lg font-medium text-white">React</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fab fa-bootstrap text-6xl text-purple-500"></i>
            <p className="mt-2 text-lg font-medium text-white">Bootstrap</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-database text-6xl text-green-500"></i>
            <p className="mt-2 text-lg font-medium text-white">MongoDB</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fab fa-node text-6xl text-green-500"></i>
            <p className="mt-2 text-lg font-medium text-white">Node.js</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-server text-6xl text-blue-500"></i>
            <p className="mt-2 text-lg font-medium text-white">Express.js</p>
          </div>
          <div className="flex flex-col items-center">
           <img src={icon} alt="tailwind" style={{height:'45px'}}/>
            <p className="mt-2 text-lg font-medium text-white">Tailwind.css</p>
          </div>

          <div className="flex flex-col items-center"></div>
        </div>{" "}
        <div className="flex justify-center items-center w-full">
          {" "}
          <Link to="/portfolio-website" className="btn btn-primary mt-3">
            {home}{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Skills;
