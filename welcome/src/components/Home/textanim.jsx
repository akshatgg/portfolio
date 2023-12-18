import { TypeAnimation } from 'react-type-animation';

function Textanim() {
  return (
    <div>
      <TypeAnimation
        sequence={[
          'Shaping the web, one code line at a time',
          1000,
          'I love turning ideas into seamless digital experiences',
          1000,
          'Passionate Developer from India',
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '2em', display: 'inline-block', color: '#800080' }}
        repeat={Infinity}
      />
    </div>
  );
}

export default Textanim;
