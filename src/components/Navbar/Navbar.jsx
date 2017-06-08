import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';


const Navbar = (props) => {
  let nav = props.customer ?
      <div className='Navbar-Links navbar-right'>
        <Link className='Navbar-Link' to='/mycart'>{props.customer.name}'s Order  ({props.customer.cart.length})</Link>
        <Link className='Navbar-Link' to='' onClick={props.handleLogout}>Log Out</Link> 
      </div> :
      <div className='Navbar-Links navbar-right'>
        <Link className='Navbar-Link' to='/login'>Log In</Link>
        <Link className='Navbar-Link' to='/signup'>Sign Up</Link>
      </div>;

  return (
    <div>
      <nav className='navbar navbar-default navbar-static-top'>
        <div className=''>
          <Link to='/' className='navbar-brand'>Donut Logo</Link>
          {nav}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;