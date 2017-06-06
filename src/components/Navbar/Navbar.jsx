import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
  let nav = props.customer ?
    <div className='container'>
      LOGO
      <ul className='nav navbar-nav navbar-right'>
        <li><Link to='' onClick={props.handleLogout}>LOG OUT</Link></li>
        <li><span className='Navbar-welcome'>WELCOME, {props.customer.name}</span></li>
      </ul>
    </div> :
    <div className='container'>
      LOGO
      <ul className='nav navbar-nav navbar-right'>
        <li><Link to='/login'>LOG IN</Link>&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li><Link to='/signup'>SIGN UP</Link></li>
      </ul>
    </div>;

  return (
    <div>
      <nav className='navbar navbar-default navbar-fixed-top'>
      {nav}
      </nav>
    </div>
  );
};

export default Navbar;