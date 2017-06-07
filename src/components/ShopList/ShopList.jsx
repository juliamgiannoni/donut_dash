import React from 'react';
import {Link} from 'react-router-dom';
import './ShopList.css';

const ShopList = (props) => {

  return (
    <div className='ShopList'>
      {props.shops.map(shop =>
        <div key={shop.name} className='ShopList-Image-Container col-xs-6 col-sm-4'>
          <Link to={`/shop/${shop.name}`}><img className='ShopList-Image' src={shop.image} alt='shops' /></Link>
          <Link className='ShopList-Name' to={`/shop/${shop.name}`}><p className='ShopList-Caption ShopList-Name'>{shop.name}</p></Link>
          <p className='ShopList-Caption ShopList-City'>{shop.city}</p>
        </div>
      )}
    </div>
  )
}

export default ShopList;