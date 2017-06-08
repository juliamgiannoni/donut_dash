import React from 'react';
import './CartList.css';

const CartList = (props) => {

  return (
    <div className='CartList'>
      {props.customer.cart.map(item =>
        <div className='CartList-Image-Container col-xs-12 col-sm-4'>
          <img className='CartList-Image' src='' alt='shops' />
          <p className='CartList-Caption CartList-Name'>{item.name}</p>
          <p className='CartList-Caption CartList-Price'>{item.price}</p>
          <button>Update my cart</button>
        </div>
      )}
    </div>
  )
}

export default CartList;