// import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/profile.png';
import contact from '../assets/contact.png';
import book from '../assets/book.png';
import home from '../assets/home.png';
import tech from '../assets/technical-support.png';
import './Navbar.css'; 
function Navbar() {

  const iconColor = '#3498db'; 
  const imageStyle = {
    filter: 'invert(1) ',
            height: '20px', // Adjust the height as needed
            color: iconColor,
  };


  return (
    <div className="flex justify-center">
      <ul className="grid grid-rows-1 grid-col-13 gap-11 mt-4">
        <li className='text-white col-start-1 flex flex-col items-center'>
          <Link to="/About" className='hover:text-blue-300 transition duration-500'>
          <img
  src={profile}
  alt='About'
  style={imageStyle}
  className={({isActive})=> `${isActive ? 'text-blue-300' : 'text-white'}` }
/>            About
          </Link>
        </li>
        <li className='text-white col-start-2 flex flex-col items-center'>
          <Link to="/Contact" className='hover:text-blue-300 transition duration-500'>
            <img src={contact} alt='Contact' style={imageStyle} className={({isActive})=> `${isActive ? 'text-blue-300' : 'text-white'}` }/>
            Contact
          </Link>
        </li>
        <li className='text-white col-start-3 flex flex-col items-center'>
          <Link to="/" className='hover:text-blue-300 transition duration-500'>
            <img src={home} alt='Home' style={imageStyle} className={({isActive})=> `${isActive ? 'text-blue-300' : 'text-white'}` }/>
            Home
          </Link>
        </li>
        <li className='text-white col-start-4 flex flex-col items-center'>
          <Link to="/Service" className='hover:text-blue-300 transition duration-500'>
            <img src={tech} alt='Service' style={imageStyle} className={({isActive})=> `${isActive ? 'text-blue-300' : 'text-white'}` }/>
            Service
          </Link>
        </li>
        <li className='text-white col-start-5 flex flex-col items-center'>
          <Link to="/Projects" className='hover:text-blue-300 transition duration-500'>
            <img src={book} alt='Projects' style={imageStyle} className={({isActive})=> `${isActive ? 'text-blue-300' : 'text-white'}` }/>
            Projects
          </Link>
        </li>
        
      </ul>
    </div>
  );
}

export default Navbar;
