// import { useEffect, useState } from "react"
import Laptopanim from "./laptopanim"
import Textanim from "./textanim"
import Hello from "./Hello"
// import About from "../About/About"
function Home() {
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
    <div className="text-white ">
      {/* ghhhhhhhh
      <img src={data.avatar_url} alt="Profile" style={{ width: '20%', height: 'auto' }} /> */}
<div className="grid grid-cols-2 ">
  {/* <div className="col-span-1 flex items-center justify-center "> */}


  <div className="col-span-1  flex justify-center">
<div className="grid grid-rows-2">
<div className="flex mt-[10%] rows-span-1 gap-x-2 ">
    <div className="grid grid-rows-2">
      <div className="row-start-1 flex">
<Hello/>
<p className="text-8xl ml-7 font-extrabold">I'm <span className="text-purple-900 ">Akshat</span></p>
</div>
<p className="row-start-2 text-7xl flex justify-center font-extrabold translate-y-[-30%] ml-[30%]">from India</p>
</div>
</div>

<div className="rows-start-2">
<Textanim/>
</div>

</div>





  {/* <div className="grid grid-rows-2 gap-y-6">
  <div className="row-start-1 ">
    <div className="flex justify-center">
    <Hello />
    </div>
    <p className="flex justify-center text-4xl">I am Akshat Gupta</p>
  </div>
  <div className="row-start-2">
    <Textanim className="w-full h-full" />
  </div>
</div> */}



  </div>
  
  <div className="col-span-1 flex items-center justify-center animation-container">
    <Laptopanim className="w-full h-full" />
  </div>
</div>

    </div>


</div>

  )
}

export default Home
