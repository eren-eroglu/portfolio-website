import React, { useEffect } from "react";
import cyberShots from "./assets/cyber-shots.jpg";
import cyberBlogs from "./assets/cyber-blog.jpg";
import timelessLove from "./assets/timeless-love.jpg";
import { AiFillGithub } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { MyContext } from "./Context";
import { useContext } from "react";

function Projects() {
  const { myStateFourth, setMyStateFourth,lang, setLang,home, setHome ,cybershotsdesc,setCybershotsdesc,cyberblogsdesc, setCyberblogsdesc,timelessdesc,setTimelessdesc} = useContext(MyContext);
  useEffect(() => {
    if(lang == 'en'){
      setMyStateFourth('⭐ Here are my favorite projects ⭐')
      setHome('Back Home')
      setCybershotsdesc("'Cyber Shots' is a React-based app that utilizes the Unsplash API to provide users with a cyberpunk-themed alternative to Unsplash. With Tailwind CSS, the user interface is highly customizable and provides a visually stunning experience for browsing and downloading high-quality, royalty-free images.")
    setCyberblogsdesc("'Cyber Blogs' is a React app built with Tailwind CSS, designed to be a platform for sharing my personal tech related blog posts. The app offers a simple and user-friendly interface to read my blog posts, as well as a streamlined way to manage and search existing posts.")
    setTimelessdesc("'Timeless Love' is a React-based app built with Tailwind CSS, designed to help couples calculate how long they have been together. The app offers a simple and intuitive user interface, where users can enter their anniversary date and the app will calculate and display the number of days, months, and years they have been together.")
    
    }else if(lang== 'tr'){
      setMyStateFourth('⭐ İşte favori projelerim ⭐')
      setHome('Geri Dön')
      setCybershotsdesc("'Cyber shots', React, Unsplash API ve Tailwind kullanılarak geliştirilmiş bir uygulamadır. Kullanıcılara, Unsplash'a alternatif olarak, siberpunk temasıyla özelleştirilmiş yüksek kaliteli, telifsiz görüntüleri sunmak için Unsplash API kullanır. Tailwind CSS ile kullanıcı arayüzü yüksek özelleştirilebilir ve görsel olarak çekici bir deneyim sağlar.")
      setCyberblogsdesc("'Cyber ​​Blogs', Tailwind CSS ile oluşturulmuş, teknolojiyle ilgili kişisel blog gönderilerimi paylaşmak için bir platform olarak tasarlanmış bir React uygulamasıdır. Uygulama, blog yazılarımı okumak için basit ve kullanıcı dostu bir arayüzün yanı sıra mevcut gönderileri yönetmek ve aramak için kolaylaştırılmış bir yol sunar .")
      setTimelessdesc("'Timeless Love', çiftlerin ne kadar süredir birlikte olduklarını hesaplamalarına yardımcı olmak için tasarlanmış, Tailwind CSS ile oluşturulmuş, React tabanlı bir uygulamadır. Uygulama, kullanıcıların yıl dönümü tarihlerini girebilecekleri ve uygulamanın birlikte oldukları gün, ay ve yılları hesaplayıp gösterebileceği basit ve sezgisel bir kullanıcı arayüzü sunar.")
    }
  },[lang])
  return (
    <div className="text-white">
      <div className="text-center typewriter">
        <h1 className="text-sm md:text-2xl lg:text-3xl tracking-tight bg-slate-600 bg-opacity-20 p-2 rounded-2xl p-3 ">
          {myStateFourth}
        </h1>
      </div>
      <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6">
          <img className="w-full mb-4" src={cyberShots} alt="Project 1" />
          <h2 className="text-lg font-bold mb-2">
            Project 1: <span className="text-purple-400">Cyber Shots</span>{" "}
          </h2>
          <p className="text-gray-400">
          {cybershotsdesc}
          </p>
        </div>
        <div className="bg-gray-800  bg-opacity-50 rounded-lg p-6">
          <img className="w-full mb-4" src={cyberBlogs} alt="Project 2" />
          <h2 className="text-lg font-bold mb-2">
            Project 2: <span className="text-purple-400">Cyber Blogs</span>
          </h2>
          <p className="text-gray-400">
         {cyberblogsdesc}
          </p>
        </div>
        <div className="bg-gray-800  bg-opacity-50 rounded-lg p-6">
          <img className="w-full mb-4" src={timelessLove} alt="Project 3" />
          <h2 className="text-lg font-bold mb-2">
            Project 3: <span className="text-purple-400">Timeless Love</span>
          </h2>
          <p className="text-gray-400">
           {timelessdesc}
          </p>
          
        </div> 

        
        
      </div>
      <div className="text-center"> <Link className="btn btn-primary m-3" to='/portfolio-website'>{home} </Link></div>
      <a href="https://github.com/eren-eroglu"> <div className="bg-black bg-opacity-50 text-center flex justify-center flex-col items-center ">Show More <AiFillGithub size={50} /></div></a>  
    </div>
  );
}

export default Projects;
