import React from 'react';
import './CartList.css';
import UpdateOrderButton from '../../components/UpdateOrderButton/UpdateOrderButton';

const CartList = (props) => {

  return (
    <div className='CartList'>
      {props.customer.cart.map(item =>
        <div key={item._id} className='CartList-Image-Container col-xs-10 col-sm-4'>
          <img className='CartList-Image' src={item.image} alt='items' />
          <p className='CartList-Caption CartList-Name'>{item.name}</p>
          <p className='CartList-Caption CartList-Price'>${item.price}</p>
          <p className='CartList-Caption CartList-Price'>Quantity: {item.quantity}</p>
          <p className='CartList-Caption CartList-Price'>{item.shopName}</p>
          <p className='CartList-Caption CartList-Price'>{item.shopCity}</p>
        </div>
      )}
      <div className='col-xs-12 col-sm-12 CartList-Button'>
        <UpdateOrderButton className='CartList-Button' />
      </div>
    </div>
  )
}

export default CartList;