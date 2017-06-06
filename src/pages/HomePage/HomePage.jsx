import React, {Component} from 'react';
import './HomePage.css';
import NavBar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import City from '../../components/City/City';
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
        <NavBar
          customer={this.props.customer}
          handleLogout={this.props.handleLogout}
        />
        <Header />
        <City cities={this.state.cities} />
      </div>
    );
  }
}

export default HomePage;