import React from 'react';
import {Link} from 'react-router-dom';
import './ProductList.css';

const ProductList = (props) => {
  var cityURL = window.location.pathname.split('/')[2].replace(/%20/g, ' ');

  let matchedCities = props.shops.filter(shop => shop.city === cityURL).map(shop => {
    if (shop.city === cityURL) {
      return (
        <div key={shop.products.name} className='ProductList-Image-Container col-xs-6 col-sm-4'>
          <img className='ProductList-Image' src={shop.products.image} alt='shops' />
          <p className='ProductList-Caption'><Link to=''>{shop.products.name}</Link></p>
          <p className='ProductList-Caption'>{shop.products.price}</p>
        </div>
      )
    }
  })

  return (
    <div className='ProductList'>
      {matchedCities}
    </div>
  )
}

export default ProductList;