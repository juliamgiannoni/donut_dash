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
      shopName: props.match.params.name,
      products: []
    }
  }

  componentDidMount() {
    let self = this;
    shopsAPI.index()
      .then(shops => {
        const thisShop = shops.filter(shop => {
          return shop.name === this.state.shopName;
        })[0]
        self.setState({
          products: thisShop.products
        })
      })
      .catch(err => {
        // handle the error gracefully
      });
  }

  render() {
    return (
      <div className='ShopPage'>
        <NavBar
          customer={this.props.customer}
          handleLogout={this.props.handleLogout}
        />
        <Header />
        <h4>Shops{this.props.match.params.name}</h4>
        <ProductList products={this.state.products} />
      </div>
    )
  }
}

export default ShopPage;