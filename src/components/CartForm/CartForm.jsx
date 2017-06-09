import React from 'react';
import './CartForm.css';

const CartForm = (props) => {
  if (props.customer.cart.length === 0) {
    return (
      <div></div>
    )
  } else {

    return (
        <div className='CartForm col-xs-12 col-sm-12'>
          <form className='form-horizontal' >
            <div className='form-group'>
              <div className='col-sm-12'>
                <input type='address' className='form-control' placeholder='Delivery Address' />
              </div>
            </div>
            <div className='form-group'>
              <div className='col-sm-12'>
                <input type='date' className='form-control' placeholder='Delivery Date' />
              </div>
            </div>
            <div className='form-group'>
              <div className='col-sm-12'>
                <input type='time' className='form-control' placeholder='Delivery Time' />
              </div>
            </div>
            <div className='form-group'>
              <div className='col-sm-12 text-center'>
              </div>
            </div>
          </form>
                <button className='CartForm-Button' onClick={() => props.clearCart()} >Place My Ordizzle</button>
        </div>
      )
  }
};

export default CartForm;