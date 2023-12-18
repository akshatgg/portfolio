import { TypeAnimation } from 'react-type-animation'
function textanim() {
  return (
    <div>
       <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
       
        'Shaping the web, one code lineat a time',
        1000,
       
        'I love turning ideas into seamless digital experiences',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
    </div>
  )
}

export default textanim
