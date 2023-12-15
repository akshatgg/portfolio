import Particles from "react-tsparticles"
import particlesconfig from "./config/particles.config"

function Particlesbg() {
  return (
    <div>
    <Particles params={particlesconfig} className="h-24"/> 
    </div>
  )
}

export default Particlesbg
