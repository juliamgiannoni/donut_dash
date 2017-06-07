import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
  let nav = props.customer ?
    <ul className='nav navbar-nav navbar-right'>
      <li className='Navbar-Link'><Link to=''>{props.customer.name}'s Order</Link></li>
      <li className='Navbar-Link'><Link to='' onClick={props.handleLogout}>Log Out</Link></li>
    </ul> :
    <ul className='nav navbar-nav navbar-right'>
      <li className='Navbar-Link'><Link to='/login'>Log In</Link></li>
      <li className='Navbar-Link'><Link to='/signup'>Sign Up</Link></li>
    </ul>;

  return (
    <div>
      <nav className='navbar navbar-default navbar-fixed-top'>
        <div className='container'>
          <Link to='/' className='navbar-brand'>Donut Logo</Link>
          {nav}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;