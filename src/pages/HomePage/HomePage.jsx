import React from 'react';
// import {Link} from 'react-router-dom';
import './HomePage.css';
import NavBar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import City from '../../components/City/City';

const HomePage = (props) => {
  return (
    <div className='HomePage'>
      <NavBar
        customer={props.customer}
        handleLogout={props.handleLogout}
      />
      <Header />
      <City />
    </div>
  );
}

export default HomePage;