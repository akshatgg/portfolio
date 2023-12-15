import Navbar from "./components/Navbar";
// import Particlesbg from "./components/Particlesbg";
import {Outlet} from 'react-router-dom'
function App() {
  return (
    <div className=" h-screen bg-black">
      {/* <Particlesbg />
      <div className="particlesheader">
        <h1>Particles.js</h1>
      </div> */}
      
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default App;
