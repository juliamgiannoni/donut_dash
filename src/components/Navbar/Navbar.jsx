import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
  <div>
    <Link to='' className='Navbar-link'>LOGIN</Link>
    &nbsp;&nbsp;|&nbsp;&nbsp;
    <Link to='' className='Navbar-link'>SIGN UP</Link>
  </div>;

  return (
    <div className='Navbar'>
      {nav}
    </div>
  );
};

export default Navbar;