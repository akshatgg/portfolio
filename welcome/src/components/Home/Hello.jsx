import Lottie from 'lottie-react'
import Hii from '../../assets/Hello.json'
function Hello() {
  return (
    <div>
         <Lottie
        animationData={Hii}
        loop={true}
        autoPlay={true}
        className='w-[150%] h-auto'
        // className='w-[20%] h-auto'

      />
    </div>
  )
}

export default Hello
