import "./style.css"
function Project() {
  return (
    <div className="flex justify-center h-screen bg-[#040404] ">
            <div className="w-[80%] h-[85%]  text-white  rounded-[80px] mt-[100px]">
               <div className="mt-9 ml-[8%]">
                <p className="text-[20px]">
                  My Work
                </p>
                <p className="text-[60px] font-extrabold">
                  Projects.
                </p>
                <p className="text-lg"> 
                Following projects showcases my skills and experience through real-world examples of <br/>my work. Each project is briefly described with links to code repositories and live demos in<br/> it. It reflects my ability to solve complex problems, work with different technologies, and <br/>manage projects effectively.
                </p>

            <div className="w-[25%] h-auto bg-[#151030] rounded-xl">
                 <div className="mt-5 ml-5">

                 </div>
                 <div className="mt-5 ml-5">
                  <p className="text-2xl font-bold">SipCraft</p>
                  <p className="mt-9">Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.</p>
                
                <div className="flex mt-5">
                  <p className="text-[#e9f540] mr-3">#js</p>   
                  <p className="text-[#e79f40] mr-3">#Firebase</p>   
                  <p className="text-[#f55540] mr-3">#HTML</p>   
                  <p className="text-[#40f5f5] mr-3">#CSS</p>   
                  </div>                    

                    <div className="grid grid-cols-2 mt-4">
                      <div className="cols-start-1">
                    <a href="">Live Preview</a>
                      </div>
                      <div className="cols-start-1 flex items-center justify-center">
                    <a href="">View Code </a>
                      </div>
                    </div>


                 </div>
            </div>
  

               </div>
                  
            </div>
    </div>
  )
}

export default Project
