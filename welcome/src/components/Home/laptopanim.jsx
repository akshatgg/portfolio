import laptop from '../../assets/laptop.json'
import Lottie from 'lottie-react'
function aptopanim() {
  return (
    <div>
      <Lottie
        animationData={laptop}
        loop={true}
        autoPlay={true}
      />

      
    </div>
  )
}

export default aptopanim
