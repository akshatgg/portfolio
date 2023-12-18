// import { useEffect, useState } from "react"
import Laptopanim from "./laptopanim"
import Textanim from "./textanim"
import Hello from "./Hello"
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
    <div className="text-white">
      {/* ghhhhhhhh
      <img src={data.avatar_url} alt="Profile" style={{ width: '20%', height: 'auto' }} /> */}
<div className="grid grid-cols-2 h-screen">
  <div className="col-span-1 flex items-center justify-center ">





  <div className="grid grid-rows-2 ">
  <div className="row-start-1 ">
    <div className="flex justify-center">
    <Hello />
    </div>
    <p className="flex justify-center text-4xl">I am Akshat Gupta</p>
  </div>
  <div className="row-start-2">
    <Textanim className="w-full h-full" />
  </div>
</div>



  </div>
  
  <div className="col-span-1 flex items-center justify-center">
    <Laptopanim className="w-full h-full" />
  </div>
</div>

    </div>
  )
}

export default Home