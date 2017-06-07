import React from 'react';
import './Header.css';

const Header = (props) => {
  return (
    <div className='Header'>
      <p className='Header-Text Header-Text-Shop'>{props.shopName}</p>
      <p className='Header-Text Header-Text-City'>{props.cityName}</p>
    </div>
  );
};

export default Header;