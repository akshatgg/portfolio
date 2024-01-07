import Home from './components/Home/Home';
import About from './components/About/About';
import Project from './components/Projects/Project';
import Contact from './components/Contact/Contact';
import { useMediaQuery } from 'react-responsive';
import { Element } from 'react-scroll';

function Execute() {
  // Set up media queries
  
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Adjust the maximum width as needed

  return (
    <div className='overflow-x-hidden'>
      {isMobile ? (
        // Render mobile-specific component or content
        <div className='text-[50px] text-white'>
          {/* Mobile-specific content goes here */}
          <p>Only For PC Setup</p>
          <p>Mobile view is in progress</p>
        </div>
      ) : (
        // Render desktop-specific components or content
        <div>
          <Element name='Home'><Home /></Element>
         <Element name='About'><About /></Element> 
          <Element name='Project'><Project /></Element>
          <Element name='Contact'><Contact /></Element>
        </div>
      )}
    </div>
  );
}

export default Execute;
