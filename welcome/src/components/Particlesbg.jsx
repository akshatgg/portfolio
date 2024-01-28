import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./config/particles.config.jsx"; // Make sure to adjust the path to your particles configuration file

function Particlesbg() {
  return (
    <div className="particles-container">
      <Particles params={particlesConfig} />
    </div>
  );
}

export default Particlesbg;
