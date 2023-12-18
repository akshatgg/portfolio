import laptop from '../../assets/laptop.json'
import Lottie from 'lottie-react'
function aptopanim() {
  return (
    <div>
      <Lottie
        animationData={laptop}
        loop={true}
        autoPlay={true}
        className='w-[30%] h-auto'
      />

      
    </div>
  )
}

export default aptopanim
