import React from 'react';
import './Header.css';

const Header = (props) => {
  let path = window.location.pathname;
  if (path === '/') {
    return (
      <div className='Header'>
        <p className='Header-Text Header-Text-Shop'>DONUT DASH</p>
      </div>
    )  
  } if (path === '/login') {
    return (
      <div className='Header'>
        <p className='Header-Text Header-Text-Shop'>Log In</p>
      </div>
    )  
  } if (path === '/signup') {
    return (
      <div className='Header'>
        <p className='Header-Text Header-Text-Shop'>Sign Up</p>
      </div>
    )  
  } if (path === '/myorder') {
    return (
      <div className='Header'>
        <p className='Header-Text Header-Text-Shop'>My Order</p>
      </div>
    )  
  } else {
    return (
      <div className='Header'>
        <p className='Header-Text Header-Text-Shop'>{props.cityName}{props.shopName}</p>
      </div>
    )
  }
};

export default Header;