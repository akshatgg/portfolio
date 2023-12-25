import GithubDP from "../../assets/GithubDP";
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



import "./Style.css"
function About() {
  const iconColor = '#3498db';

  const imageStyle = {
    filter: 'invert(1) ',
    height: '40px', // Adjust the height as needed
    color: iconColor,
  };
  return (
    
    <div className="flex justify-center h-screen bg-[#040404]   ">
      <div className="w-[80%] h-[85%] mt-[100px] text-white bg-[#151030] rounded-[80px]">
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
      <p className="mt-[2%]">
      As a dynamic and enthusiastic individual, I am always seeking new challenges that allow me to push myself beyond my limits. I thrive in competitive environments and enjoy collaborating with like-minded individuals who share my passion for continuous growth and development. I have a strong desire to acquire new skills and knowledge, and I enjoy sharing my expertise with others. I approach tasks with an open mind and constantly seek innovative ways to overcome obstacles and achieve success.
      </p>
      
      </div>
      <div className="col-start-2 flex flex-col items-center">
      
           {/* <GithubDP/> */}
           <img src={image} className="rounded-full w-[45%] h-auto"></img>
           
          <a href="#"><button className="resume bg-blue-700 pl-9 pr-9 text-center text-xl rounded-lg mt-9">Resume</button></a>
      </div>

      </div>


      <div className="flex ">
      <a href="" className="mr-5 inline-block  hover:scale-110 ">
        <img src={Github} alt='Github' style={imageStyle}/>
      </a>
      <a href="" className="mr-5 inline-block  hover:scale-110 ">
        <img src={Gmail} alt='Github' style={imageStyle}/>
      </a>
      <a href="" className="mr-5 inline-block  hover:scale-110 ">
        <img src={Twitter} alt='Github' style={imageStyle}/>
      </a>
      <a href="" className="mr-5 inline-block  hover:scale-110 ">
        <img src={Linkedin} alt='Github' style={imageStyle}/>
      </a>
      <a href=""className="mr-5 inline-block  hover:scale-110 ">
        <img src={Instagram} alt='Github' style={imageStyle}/>
      </a>
      </div>


      <div className="grid grid-cols-2">
        <div className="col-start-1">
<p className="text-3xl mt-6 text-gray-400 font-semibold"> Work Experience - </p>
      <div className="flex mt-5">
          <div className="animation mr-7">  <img src={linux} alt="" style={imageStyle}></img>  </div>
          <div className="animation mr-7">  <img src={React} alt="" style={imageStyle}></img>  </div>
          <div className="animation mr-7">  <img src={gitlab} alt="" style={imageStyle}></img>  </div>
          <div className="animation mr-7">  <img src={CSS} alt="" style={imageStyle}></img>  </div>
          <div className="animation mr-7">  <img src={html} alt="" style={imageStyle}></img>  </div>
          <div className="animation mr-7">  <img src={linux} alt="" style={imageStyle}></img>  </div>
 

          </div>

      </div>

       <div className="col-start-2 ">
          <p className="text-3xl mt-6 text-gray-400 font-semibold"> Languages I know - </p>
<div className="flex mt-5">
<div className="animation mr-7">  <img src={js} alt="" style={imageStyle}></img>  </div>
<div className="animation mr-7">  <img src={C} alt="" style={imageStyle}></img>  </div>
<div className="animation mr-7">  <img src={Cplus} alt="" style={imageStyle}></img>  </div>
<div className="animation mr-7">  <img src={java} alt="" style={imageStyle}></img>  </div>
<div className="animation mr-7">  <img src={python} alt="" style={imageStyle}></img>  </div>




</div>
       </div>

      </div>
      </div>
      </div>
    </div>
  );
}

export default About;
