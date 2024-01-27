// import GithubDP from "../../assets/GithubDP";
import Github from "../../assets/github.png";
import Gmail from "../../assets/gmail.png"
import Twitter from "../../assets/twitter.png"
import Linkedin from "../../assets/linkedin.png"
import Instagram from "../../assets/instagram.png"
import linux from "../../assets/linux.png"
import js from "../../assets/js.png"
import React from "../../assets/React.png"
import C from "../../assets/letter-c.png"
import java from "../../assets/java.png"
import html from "../../assets/html.png"
import gitlab from "../../assets/gitlab.png"
import CSS from "../../assets/css-3.png"
import Cplus from "../../assets/c-.png"
import image from "../../assets/image.jpeg"
import python from "../../assets/python.png"
import Vite from "../../assets/vite-seeklogo.com.svg"
import AOS from "aos";
import 'aos/dist/aos.css'
import "./Style.css"
import postman from "../../assets/postman-seeklogo.svg"
import node from "../../assets/node-js-seeklogo.svg"
import mongo from "../../assets/mongodb-seeklogo.svg"


import { useEffect } from "react";
function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const iconColor = '#3498db';

  const imageStyle = {
    filter: 'invert(1) ',

    color: iconColor,
  };
  return (
    
    <div className="sc flex justify-center  bg-[#040404]   ">
      <div className="absolute w-[80%] h-auto mt-[100px] text-white bg-[#151030] rounded-[80px] " data-aos="fade-right">
     <div className="mt-9 ml-[8%]">
      <p className="text-7xl font-semibold ">
        About Me
      </p>
      <div className="grid grid-col-2 mt-[80px]">
        <div className="col-start-1">
      <p className=" text-[130%]  ">
        Hii I,am
      </p>
      <p className="text-[200%] mt-3">
       Akshat Gupta
      </p>
      <p className="mt-3 text-[130%] font-semibold">
        Passionate Developer from India
      </p>
      <p className="mt-[2%] text-[18px]">
      As a dynamic and enthusiastic individual, I am always seeking new challenges that allow me to push myself beyond my limits. I thrive in competitive environments and enjoy collaborating with like-minded individuals who share my passion for continuous growth and development. I have a strong desire to acquire new skills and knowledge, and I enjoy sharing my expertise with others. I approach tasks with an open mind and constantly seek innovative ways to overcome obstacles and achieve success.
      </p>
      
      </div>
      <div className="col-start-2 flex flex-col items-center">
      
           {/* <GithubDP/> */}
           <img src={image} className="rounded-full w-[45%] h-auto"></img>
           
          <a href="https://drive.google.com/file/d/1Yko10KJTAupT5C0iKq1VKq-5peNZMhUH/view?usp=sharing" target="blank"><button className="resume bg-blue-700 pl-9 pr-9 text-center text-xl rounded-lg mt-9">Resume</button></a>
      </div>

      </div>


      <div className="flex flex-wrap mt-10">
      <a href="https://github.com/akshatgg" className="mr-5 inline-block ">
        <img src={Github} alt='Github' className="hover:translate-y-[-8px] h-14 w-14 hover:scale-105 duration-300" style={imageStyle}/>
      </a>
      <a href="https://mail.google.com/mail/u/0/#inbox" className="mr-5 inline-block  ">
        <img src={Gmail} alt='Github' className="hover:translate-y-[-8px] h-14 w-14  hover:scale-105  duration-300" style={imageStyle}/>
      </a>
      <a href="" className="mr-5 inline-block">
        <img src={Twitter} alt='Github' className="hover:translate-y-[-8px] h-14 w-14 hover:scale-105 duration-300" style={imageStyle}/>
      </a>
      <a href="" className="mr-5 inline-block">
        <img src={Linkedin} alt='Github' className="hover:translate-y-[-8px] h-14 w-14 hover:scale-105  duration-300" style={imageStyle}/>
      </a>
      <a href=""className="mr-5 inline-block">
        <img src={Instagram} alt='Github' className="hover:translate-y-[-8px] h-14 w-14 hover:scale-105  duration-300" style={imageStyle}/>
      </a>
      </div>


      <div className="grid grid-cols-2 mb-8">





      <div className="col-start-1">
  <p className="text-4xl mt-6 text-gray-400 font-semibold">Work Experience - </p>
  
  
  
  <div className="flex flex-wrap mt-5">
  <div className="animation mr-2 relative group">
    <img src={linux} alt="" style={imageStyle} className="hover:translate-y-[-8px] h-14 w-14  hover:scale-110 rounded-full duration-300" />
    <div className="hidden group-hover:block absolute bg-gray-800 text-white p-2 rounded-lg top-0 left-0 mt-10">
      Linux
    </div>
  </div>
  <div className="animation mr-3 relative group">
    <img src={React} alt="" style={imageStyle} className="hover:translate-y-[-8px] h-14 w-14 hover:scale-110 rounded-full duration-300" />
    <div className="hidden group-hover:block absolute bg-gray-800 text-white p-2 rounded-lg top-0 left-0 mt-10">
      React
    </div>
  </div>
  <div className="animation mr-3 relative group">
    <img src={gitlab} alt="" style={imageStyle} className="hover:translate-y-[-8px] h-14 w-14 hover:scale-110 rounded-full duration-300" />
    <div className="hidden group-hover:block absolute bg-gray-800 text-white p-2 rounded-lg top-0 left-0 mt-10">
      GitLab
    </div>
  </div>
  <div className="animation mr-3 relative group">
    <img src={CSS} alt="" style={imageStyle} className="hover:translate-y-[-8px] h-14 w-14 hover:scale-110 rounded-full duration-300" />
    <div className="hidden group-hover:block absolute bg-gray-800 text-white p-2 rounded-lg top-0 left-0 mt-10">
      CSS
    </div>
  </div>
  <div className="animation mr-3 relative group">
    <img src={html} alt="" style={imageStyle} className="hover:translate-y-[-8px] h-14 w-14 hover:scale-110 rounded-full duration-300" />
    <div className="hidden group-hover:block absolute bg-gray-800 text-white p-2 rounded-lg top-0 left-0 mt-10">
      HTML
    </div>
  </div>
  <div className="animation mr-3 relative group">
    <img src={Vite} alt="" style={imageStyle} className="hover:translate-y-[-8px] h-14 w-14 hover:scale-110 rounded-full duration-300" />
    <div className="hidden group-hover:block absolute bg-gray-800 text-white p-2 rounded-lg top-0 left-0 mt-10">
      Vite
    </div>
  </div>
  <div className="animation mr-3 relative group">
    <img src={postman} alt="" style={imageStyle} className="hover:translate-y-[-8px] h-14 w-14 hover:scale-110 rounded-full duration-300" />
    <div className="hidden group-hover:block absolute bg-gray-800 text-white p-2 rounded-lg top-0 left-0 mt-10">
      Postman
    </div>
  </div>
  <div className="animation mr-3 relative group">
    <img src={node} alt="" style={imageStyle} className="hover:translate-y-[-8px] h-14 w-14 hover:scale-110 rounded-full duration-300" />
    <div className="hidden group-hover:block absolute bg-gray-800 text-white p-2 rounded-lg top-0 left-0 mt-10">
      Node.js
    </div>
  </div>
  <div className="animation mr-3 relative group">
    <img src={mongo} alt="" style={imageStyle} className="hover:translate-y-[-8px] h-14 w-14 hover:scale-110 rounded-full duration-300" />
    <div className="hidden group-hover:block absolute bg-gray-800 text-white p-2 rounded-lg top-0 left-0 mt-10">
      MongoDB
    </div>
  </div>
</div>



</div>





<div className="col-start-2">
  <p className="text-4xl mt-6 text-gray-400 font-semibold">Languages I know - </p>
  
  
  
  <div className="flex flex-wrap mt-5">
  <div className="animation mr-7 relative group">
    <img src={js} alt="" style={imageStyle} className="hover:translate-y-[-8px]  h-14 w-14 hover:scale-110 rounded-full duration-300" />
    <div className="hidden group-hover:block absolute bg-gray-800 text-white p-2 rounded-lg top-0 left-0 mt-10">
      JavaScript
    </div>
  </div>
  <div className="animation mr-7 relative group">
    <img src={C} alt="" style={imageStyle} className="hover:translate-y-[-8px] h-14 w-14 hover:scale-110 rounded-full duration-300" />
    <div className="hidden group-hover:block absolute bg-gray-800 text-white p-2 rounded-lg top-0 left-0 mt-10">
      C
    </div>
  </div>
  <div className="animation mr-7 relative group">
    <img src={Cplus} alt="" style={imageStyle} className="hover:translate-y-[-8px] h-14 w-14  hover:scale-110 rounded-full duration-300" />
    <div className="hidden group-hover:block absolute bg-gray-800 text-white p-2 rounded-lg top-0 left-0 mt-10">
      C++
    </div>
  </div>
  <div className="animation mr-7 relative group">
    <img src={java} alt="" style={imageStyle} className="hover:translate-y-[-8px] h-14 w-14 hover:scale-110 rounded-full duration-300" />
    <div className="hidden group-hover:block absolute bg-gray-800 text-white p-2 rounded-lg top-0 left-0 mt-10">
      Java
    </div>
  </div>
  <div className="animation mr-7 relative group">
    <img src={python} alt="" style={imageStyle} className="hover:translate-y-[-8px] h-14 w-14 hover:scale-110 rounded-full duration-300" />
    <div className="hidden group-hover:block absolute bg-gray-800 text-white p-2 rounded-lg top-0 left-0 mt-10">
      Python
    </div>
  </div>
</div>



</div>


      </div>
      </div>
      </div>
    </div>
  );
}

export default About;
