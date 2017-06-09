import React from 'react';
import './CartList.css';

const CartList = (props) => {
  if (props.customer.cart.length === 0) {
    return (
      <div className='col-xs-12 col-sm-12'>
        <h4 style={{textAlign: 'center', marginTop: 30}} >There are no donuts in your cart.</h4>
      </div>
    )
  } else {
    return (
      <div className='CartList'>
        {props.customer.cart.map(item =>
          <div key={item._id} className='CartList-Container col-xs-10 col-sm-12'>
            <div className='CartList-Image col-xs-10 col-sm-8'>
              <img className='CartList-Image' src={item.image} alt='items' />
            </div>
            <div className='CartList-Details-Container col-xs-7 col-sm-4'>
              <p className='CartList-Name-Price'>{item.name} - ${item.price}</p>
              <p className='CartList-Details'>Quantity: {item.quantity}</p>
              <p className='CartList-Details'>{item.shopName} - {item.shopCity}</p>
            </div>
          </div>
        )}
          <hr/>
      </div>
    )
  }
};

export default CartList;