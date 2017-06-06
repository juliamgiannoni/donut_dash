import React from 'react';
import {Link} from 'react-router-dom';
import './ShopList.css';

const ShopList = (props) => {
  return (
    <div className='ShopList'>
      <div>Google Map</div>
      {props.shops.map(shop =>
        <div key={shop.name} className='ShopList-Image-Container col-xs-6 col-sm-4'>
          <img className='ShopList-Image' src={shop.image} alt='shops' />
          <p className='shopList-Caption'><Link to=''>{shop.name}</Link></p>
          <p className='shopList-Caption'>{shop.city}</p>
        </div>
      )}
    </div>
  )
}

export default ShopList;