import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <ul className="grid grid-rows-1 grid-flow-col">
      <li className='text-white'>
        <Link to="/home" >Home</Link>
      </li>
    </ul>
  );
}

export default Navbar;
