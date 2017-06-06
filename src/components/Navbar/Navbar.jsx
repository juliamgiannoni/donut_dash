import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
  let nav = props.customer ?
  <div>
    <Link to='' className='Navbar-link' onClick={props.handleLogout} >LOG OUT</Link>
    &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <span className='Navbar-welcome'>WELCOME, {props.customer.name}</span>
  </div> :
  <div>
    <Link to='/login' className='Navbar-link'>LOG IN</Link>
    &nbsp;&nbsp;|&nbsp;&nbsp;
    <Link to='/signup' className='Navbar-link'>SIGN UP</Link>
  </div>;

  return (
    <div className='Navbar'>
      {nav}
    </div>
  );
};

export default Navbar;