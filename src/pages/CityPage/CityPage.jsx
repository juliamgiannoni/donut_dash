import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import ShopList from '../../components/ShopList/ShopList';
import shopsAPI from '../../utils/shopsAPI';

class CityPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: props.match.params.name,
      shops: []
    }
  }

  componentDidMount() {
    let self = this;
    shopsAPI.index()
    .then(shops => {
      const thisCity = shops.filter(shop => {
        return shop.city === this.state.cityName;
      })
      self.setState({
        shops: thisCity
      })
    });
  }

  render() {
    return (
      <div>
        <Navbar
          customer={this.props.customer}
          handleLogout={this.props.handleLogout}
        />
        <Header cityName={this.state.cityName} />
        <ShopList shops={this.state.shops} />
      </div>
    )
  }
}

export default CityPage;