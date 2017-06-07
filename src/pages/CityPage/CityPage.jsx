import React, { Component } from 'react';
import './CityPage.css';
import NavBar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import ShopList from '../../components/ShopList/ShopList';
import ShopsMap from '../../components/ShopsMap/ShopsMap';
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
    })
    .catch(err => {
      //handle error
    });
  }

  render() {
    return (
      <div className='CityPage'>
        <NavBar
          customer={this.props.customer}
          handleLogout={this.props.handleLogout}
        />
        <Header cityName={this.state.cityName} />
        <ShopsMap />
        <ShopList shops={this.state.shops} />
      </div>
    )
  }
}

export default CityPage;