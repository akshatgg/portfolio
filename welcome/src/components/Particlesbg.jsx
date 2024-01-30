import Particles from "react-tsparticles";
import particlesConfig from "./config/particles.config.jsx"; 

function Particlesbg() {
  return (
    <div className="particles-container">
      <Particles params={particlesConfig} />
    </div>
  );
}

export default Particlesbg;



