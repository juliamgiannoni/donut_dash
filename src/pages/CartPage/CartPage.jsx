import React, { Component } from 'react';
import CartForm from '../../components/CartForm/CartForm';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import CartList from '../../components/CartList/CartList';
import customerService from '../../utils/customerService';
import cartService from '../../utils/cartService';

class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: null
    }
  }

  clearCart = () => {
    cartService.clearCart(this.state.products, this.state.shop).then((res) => {
      this.props.handleCartUpdate();
      let newCart = this.state.customer.cart = [] 
      this.setState(() => {customer: newCart })
    });
  }

  /*---------- Lifecycle Methods ----------*/

  componentDidMount() {
    let customer = customerService.getCustomer();
    this.setState({customer});
  }

  render() {
    return (
      <div className='CartPage'>
        <Navbar
          customer={this.props.customer}
          handleLogout={this.props.handleLogout}
        />
        <Header shopName={this.state.shopName} />
        {!this.state.customer ? 
          <h4 style={{textAlign: 'center', marginTop: 30}} >Please log in to access your order.</h4> : 
          <div>
            <CartList customer={this.state.customer} />
            <CartForm customer={this.state.customer} clearCart={this.clearCart}/>
          </div> 
          }
      </div>
    )
  }
}

export default CartPage;