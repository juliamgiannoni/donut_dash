import React from 'react';
import {Link} from 'react-router-dom';
import './ShopList.css';

const ShopList = (props) => {
  var cityURL = window.location.pathname.split('/')[2].replace(/%20/g, ' ');

  let matchedCities = props.shops.filter(shop => shop.city === cityURL).map(shop => {
    if (shop.city === cityURL) {
      return (
        <div key={shop.name} className='ShopList-Image-Container col-xs-6 col-sm-4'>
          <img className='ShopList-Image' src={shop.image} alt='shops' />
          <p className='ShopList-Caption'><Link to={`/shop/${shop.name}`}>{shop.name}</Link></p>
          <p className='ShopList-Caption'>{shop.city}</p>
        </div>
      )
    }
  })

  return (
    <div className='ShopList'>
      <div className='col-md-12 ShopList-Map'>Google Map</div>
      {matchedCities}
    </div>
  )
}

export default ShopList;