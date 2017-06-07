import React from 'react';
import './AddToOrderButton.css'

const AddToOrderButton = (props) => {
  return (
    <button
      className='AddToOrderButton'
      onClick={() => props.addItemToCart(props.itemIdx)}
    >
      Add To Order
    </button>
  );
}

export default AddToOrderButton;