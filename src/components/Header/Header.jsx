import React from 'react';
import './Header.css';

const Header = (props) => {
  return (
    <div className='Header'>
      {props.shopName}
      {props.cityName}
    </div>
  );
};

export default Header;