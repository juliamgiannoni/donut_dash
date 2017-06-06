import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
  let nav = props.customer ?
    <ul className='nav navbar-nav navbar-right'>
      <li><Link to='' onClick={props.handleLogout}>LOG OUT</Link></li>
      <li><span className='Navbar-welcome'>WELCOME, {props.customer.name}</span></li>
    </ul> :
    <ul className='nav navbar-nav navbar-right'>
      <li><Link to='/login'>LOG IN</Link></li>
      <li><Link to='/signup'>SIGN UP</Link></li>
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