import React from 'react';
import './CartForm.css';

const CartForm = (props) => {
  if (props.customer.cart.length === 0) {
    return (
      <div></div>
    )
  } else {
    return (
        <div className='CartForm'>
          <form className='form-horizontal' >
            <div className='form-group'>
              <div className='col-sm-12'>
                <input type='email' className='form-control' placeholder='Email' value='' />
              </div>
            </div>
            <div className='form-group'>
              <div className='col-sm-12'>
                <input type='password' className='form-control' placeholder='Password' value='' />
              </div>
            </div>
            <div className='form-group'>
              <div className='col-sm-12 text-center'>
                <button className='CartForm-Button'>Place My Order</button>
              </div>
            </div>
          </form>
        </div>
      )
  }
};

export default CartForm;