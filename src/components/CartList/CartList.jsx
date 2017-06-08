import React from 'react';
import './CartList.css';

const CartList = (props) => {

console.log('this is: ', props)
  return (
    <div className='CartList'>
      {/*{props.products.map((product, idx) =>*/}
        <div className='CartList-Image-Container col-xs-12 col-sm-4'>
          <img className='CartList-Image' src='' alt='shops' />
          <p className='CartList-Caption CartList-Name'></p>
          <p className='CartList-Caption CartList-Price'></p>
          <button>Update my cart</button>
        </div>
      {/*)}*/}
    </div>
  )
}

export default CartList;