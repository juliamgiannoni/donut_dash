import React, { Component } from 'react';
import './CartPage.css';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import ProductList from '../../components/ProductList/ProductList';
import shopsAPI from '../../utils/shopsAPI';
import orderService from '../../utils/orderService';

class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className='CartPage'>
        <Navbar
          customer={this.props.customer}
          handleLogout={this.props.handleLogout}
        />
        <Header shopName={this.state.shopName} />
        this is the cart page
      </div>
    )
  }
}

export default CartPage;