import React, { Component } from 'react';
import './CartPage.css';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import CartList from '../../components/CartList/CartList';
import shopsAPI from '../../utils/shopsAPI';
import orderService from '../../utils/orderService';
import customerService from '../../utils/customerService';

class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: null
    }
    console.log('cart page  consturctors')
    console.log('in constructor this.state =', this.state)
    console.log('in constructor this.props =', this.props)
  }

  /*---------- Lifecycle Methods ----------*/

  componentDidMount() {
    console.log('getting customer aaaaaa')
    let customer = customerService.getCustomer();
    this.setState({customer});
  }

  render() {
    console.log('in render this.state =', this.state)
    console.log('in render this.props =', this.props)
    console.log('this is the customer', this.state.customer)
    return (
      <div className='CartPage'>
        <Navbar
          customer={this.props.customer}
          handleLogout={this.props.handleLogout}
        />
        <Header shopName={this.state.shopName} />
        {!this.state.customer ? <h1>loading</h1> : <CartList customer={this.state.customer} /> }
        this is the cart page
      </div>
    )
  }
}

export default CartPage;