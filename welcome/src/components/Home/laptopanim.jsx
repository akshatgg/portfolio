import laptop from '../../assets/laptop.json'
import Lottie from 'lottie-react'
function aptopanim() {
  return (
    <div>
      <Lottie
        animationData={laptop}
        loop={true}
        autoPlay={true}
        className='w-[90%] h-auto'
      />

      
    </div>
  )
}

export default aptopanim
