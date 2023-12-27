import Projectitem from "./Projectitem"
import SipcraftImage from "../../assets/Sipcraft.png"
import "./style.css"
function Project() {
  return (
    <div className="flex justify-center screen bg-[#040404] ">
            <div className="w-[80%] h-[85%] text-white  rounded-[80px] mt-[100px]">
               <div className="mt-9 ml-[8%]">
                <p className="text-[50px]">
                  My Work
                </p>
                <p className="text-[80px] font-extrabold">
                  Projects.
                </p>
                <p className="text-xl mt-3"> 
                Following projects showcases my skills and experience through real-world examples of <br/>my work. Each project is briefly described with links to code repositories and live demos in<br/> it. It reflects my ability to solve complex problems, work with different technologies, and <br/>manage projects effectively.
                </p>



<div className="flex overflow-x-auto">


<Projectitem 
projectname="Sipcraft"
 content="Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs."
  livepreview="https://sipcraft.vercel.app/" 
  github="https://github.com/akshatgg/SipCrafts" 
image={SipcraftImage}
alt="Sipcraft"
/>


<Projectitem 
projectname="Sipcraft"
 content="Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs."
  livepreview="https://sipcraft.vercel.app/" 
  github="https://github.com/akshatgg/SipCrafts" 
image={SipcraftImage}
alt="Sipcraft"
/>






<Projectitem 
projectname="Sipcraft"
 content="Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs."
  livepreview="https://sipcraft.vercel.app/" 
  github="https://github.com/akshatgg/SipCrafts" 
image={SipcraftImage}
alt="Sipcraft"
/>



</div>
<div className="flex">
<Projectitem 
projectname="Sipcraft"
 content="Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs."
  livepreview="https://sipcraft.vercel.app/" 
  github="https://github.com/akshatgg/SipCrafts" 
image={SipcraftImage}
alt="Sipcraft"
/>

            </div>



               </div>
                  
            </div>
    </div>
  )
}

export default Project
