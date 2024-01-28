// import { useEffect, useState } from "react"
import Laptopanim from "./laptopanim"
import Textanim from "./textanim"
import Hello from "./Hello"
import AOS from "aos"
import "aos/dist/aos.css"; 
import './HomeStyle.css'

import "./HomeStyle.css"
import { useEffect } from "react";
function Home() {
  useEffect(()=>{
    AOS.init(({duratin:1000}))
  },[])
    // const [data,setdata]=useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/akshatgg')
    //     .then(response=> response.json())
    //     .then(content=>{
    //         setdata(content)
    //     }
         
    //     )
    //     .catch(error => {
    //         console.error('Error fetching data:', error);
    //     });
    // })
  return (
    <div className="mt-[50px]">
    <div className="text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        <div className="flex justify-center">
          <div className="grid grid-rows-2">
            <div className="flex mt-[10%] rows-span-1 gap-x-2 ">
              <div className="grid grid-rows-2">
                <div className="row-start-1 flex">
                  <Hello />
                  <p className="text-8xl ml-7 font-extrabold">I'm <span className="text-purple-900 ">Akshat</span></p>
                </div>
                <p className="row-start-2 text-7xl flex justify-center font-extrabold translate-y-[-30%] ml-[32%] md:ml-12">from India</p>
              </div>
            </div>
  
            <div className="rows-start-2">
              <Textanim />
            </div>
          </div>
        </div>
  
        <div className="flex items-center justify-center mb-36 md:mb-0" data-aos="fade-left">
          <Laptopanim className="laptop w-full h-full" />
        </div>
      </div>
    </div>
  </div>
  

  )
}

export default Home
