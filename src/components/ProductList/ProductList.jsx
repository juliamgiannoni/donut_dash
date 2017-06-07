import React from 'react';
import './ProductList.css';
import AddToOrderButton from '../../components/AddToOrderButton/AddToOrderButton';

const ProductList = (props) => {

  return (
    <div className='ProductList'>
      {props.products.map(product =>
        <div key={product.name} className='ProductList-Image-Container col-xs-6 col-sm-4'>
          <img className='ProductList-Image' src={product.image} alt='shops' />
          <p className='ProductList-Caption ProductList-Name'>{product.name}</p>
          <p className='ProductList-Caption ProductList-Price'>${product.price}</p>
        </div>
      )}
      <div className='ProductList-Button col-xs-12 col-sm-4'>
        <AddToOrderButton />
      </div>
    </div>
  )
}

export default ProductList;