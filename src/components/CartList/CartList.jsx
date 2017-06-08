import React from 'react';
import './CartList.css';
import UpdateOrderButton from '../../components/UpdateOrderButton/UpdateOrderButton';

const CartList = (props) => {

  return (
    <div className='CartList'>
      {props.customer.cart.map(item =>
        <div key={item._id} className='CartList-Container col-xs-10 col-sm-12'>
          <div className='CartList-Image col-xs-10 col-sm-6'>
            <img className='CartList-Image' src={item.image} alt='items' />
          </div>
          <div className='CartList-Details col-xs-7 col-sm-6'>
            <p className='CartList-Name'>{item.name}</p>
            <p className='CartList-Price'>${item.price}</p>
            <p className='CartList-Price'>Quantity: {item.quantity}</p>
            <p className='CartList-Price'>{item.shopName}</p>
            <p className='CartList-Price'>{item.shopCity}</p>
          </div>
        </div>
        <hr/>
      )}
      <div className='col-xs-12 col-sm-12 CartList-Button'>
        {props.customer.cart.length >= 1 ? <UpdateOrderButton className='CartList-Button' /> : <h4>You have no donuts in your cart.</h4>}
      </div>
    </div>
  )
}

export default CartList;