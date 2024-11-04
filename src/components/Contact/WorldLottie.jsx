import Lottie from 'lottie-react'
import World from '../../assets/World.json'
function WorldLottie() {
  return (
    <div>
       <Lottie
        animationData={World}
        loop={true}
        autoPlay={true}
        className='w-[78%] h-auto'
      />
    </div>
  )
}

export default WorldLottie
