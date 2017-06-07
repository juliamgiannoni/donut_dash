import React from 'react';
import {Link} from 'react-router-dom';
import './ProductList.css';

const ProductList = (props) => {

  return (
    <div className='ProductList'>
      {props.products.map(product =>
        <div key={product.name} className='ProductList-Image-Container col-xs-6 col-sm-4'>
          <img className='ProductList-Image' src={product.image} alt='shops' />
          <p className='ProductList-Caption'><Link to=''>{product.name}</Link></p>
          <p className='ProductList-Caption'>{product.price}</p>
        </div>
      )}
    </div>
  )
}

export default ProductList;