import React, { Component } from 'react';
import './CityPage.css';
import NavBar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import ShopList from '../../components/ShopList/ShopList';
import shopsAPI from '../../utils/shopsAPI';


class CityPage extends Component {
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
      <div className='CityPage'>
        <NavBar
          customer={this.props.customer}
          handleLogout={this.props.handleLogout}
        />
        <Header />
        <h1>this is the {this.props.match.params.name} page</h1>
        <ShopList shops={this.state.shops} />
      </div>
    )
  }
}

export default CityPage;