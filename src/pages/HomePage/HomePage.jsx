import React, {Component} from 'react';
import './HomePage.css';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import CityList from '../../components/CityList/CityList';
import citiesAPI from '../../utils/citiesAPI';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: []
    }
  }

  componentDidMount() {
    let self = this;
    citiesAPI.index()
    .then(cities => self.setState({
      cities
    }));
  }

  render() {
    return (
      <div className='HomePage'>
        <Navbar
          customer={this.props.customer}
          handleLogout={this.props.handleLogout}
        />
        <Header />
        <CityList cities={this.state.cities} />
      </div>
    );
  }
}

export default HomePage;