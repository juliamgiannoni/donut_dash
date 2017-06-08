import React from 'react';
import './ProductList.css';
import AddToOrderButton from '../../components/AddToOrderButton/AddToOrderButton';

const ProductList = (props) => {

  return (
    <div className='ProductList'>
      {props.products.map((product, idx) =>
        <div key={product.name} className='ProductList-Image-Container col-xs-10 col-sm-4'>
          <img className='ProductList-Image' src={product.image} alt='products' />
          <p className='ProductList-Caption ProductList-Name'>{product.name}</p>
          <p className='ProductList-Caption ProductList-Price'>${product.price}</p>
          <AddToOrderButton className='ProductList-Button' itemIdx={idx} addItemToCart={props.addItemToCart} />
        </div>
      )}
    </div>
  )
}

export default ProductList;