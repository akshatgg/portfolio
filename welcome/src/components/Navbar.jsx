import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <ul className="grid grid-rows-1 grid-flow-col">
      <li className='text-white'>
        <Link to="/home" >About</Link>
      </li>
      <li className='text-white'>
        <Link to="/home" >Contact</Link>
      </li>
      <li className='text-white'>
        <Link to="/home" >Home</Link>
      </li>
      <li className='text-white'>
        <Link to="/home" >Project</Link>
      </li>
      <li className='text-white'>
        <Link to="/home" >Service</Link>
      </li>

    </ul>
  );
}

export default Navbar;
