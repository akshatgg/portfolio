import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import profile from '../../assets/profile.png';
import contact from '../../assets/contact.png';
import book from '../../assets/book.png';
import home from '../../assets/home.png';
import tech from '../../assets/technical-support.png';
import './Navbar.css';

function Navbar() {
  const iconColor = '#3498db';

  const imageStyle = {
    filter: 'invert(1) ',
    height: '20px', // Adjust the height as needed
    color: iconColor,
  };

  const [fix, setFix] = useState(false);

  const setFixed = () => {
    if (window.scrollY >= 50) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', setFixed);

    return () => {
      window.removeEventListener('scroll', setFixed);
    };
  }, []); // Adding an empty dependency array ensures the event listener is added only once during component mount.

  return (
    <div className={`flex justify-center z-10 ${fix ? 'fixed top-0 left-0 w-full bg-black transition duration-1000' : ''}`}>
      <ul className="grid grid-cols-5 gap-11 mt-4">
        <li className='text-white flex flex-col items-center'>
          <Link to="/About" className='hover:text-blue-300 transition duration-500  spy={true} 
      smooth={true} 
      offset={-100} 
      duration={500} '>
            <img src={profile} alt='About' style={imageStyle} />
            About
          </Link>
        </li>
        <li className='text-white flex flex-col items-center'>
          <Link to="/Contact" className='hover:text-blue-300 transition duration-500  spy={true} 
      smooth={true} 
      offset={-100} 
      duration={500} '>
            <img src={contact} alt='Contact' style={imageStyle} />
            Contact
          </Link>
        </li>
        <li className='text-white flex flex-col items-center'>
          <Link to="/" className='hover:text-blue-300 transition duration-500  spy={true} 
      smooth={true} 
      offset={-100} 
      duration={500} '>
            <img src={home} alt='Home' style={imageStyle} />
            Home
          </Link>
        </li>
        <li className='text-white flex flex-col items-center'>
          <Link to="/Service" className='hover:text-blue-300 transition duration-500  spy={true} 
      smooth={true} 
      offset={-100} 
      duration={500} '>
            <img src={tech} alt='Service' style={imageStyle} />
            Service
          </Link>
        </li>
        <li className='text-white flex flex-col items-center'>
          <Link to="/Project" className='hover:text-blue-300 transition duration-500  spy={true} 
      smooth={true} 
      offset={-100} 
      duration={500} '>
            <img src={book} alt='Projects' style={imageStyle} />
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
