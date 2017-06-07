import React, { Component } from 'react';
import './ShopPage.css';
import NavBar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import ProductList from '../../components/ProductList/ProductList';
import shopsAPI from '../../utils/shopsAPI';

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shops: []
    }
  }

  componentDidMount() {
    let self = this;
    shopsAPI.index()
    .then(shops => self.setState({
      shops
    }));
  }

  render() {
    return (
      <div className='ShopPage'>
        <NavBar
          customer={this.props.customer}
          handleLogout={this.props.handleLogout}
        />
        <Header />
        <h4>{this.props.match.params.name}</h4>
        <ProductList products={this.state.shops.products} />
      </div>
    )
  }
}

export default ShopPage;