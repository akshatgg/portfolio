import Execute from "./Execute";
import Navbar from "./components/NavBar/Navbar";
// import Particlesbg from "./components/Particlesbg";
import {Outlet} from 'react-router-dom'
import SocialLinks from "./components/SocialLinks/SocialLinks";
function App() {
  return (
    <div className=" h-screen bg-[#040404]">
      {/* <Particlesbg />
      <div className="particlesheader">
        <h1>Particles.js</h1>
      </div> */}
     
      <Navbar/>
      <SocialLinks/>
      <Outlet/>
      <Execute/>
      
    </div>
  );
}

export default App;
