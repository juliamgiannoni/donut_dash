import React from 'react';
import {Link} from 'react-router-dom';
import './HomePage.css';
import NavBar from '../../components/Navbar/Navbar';

const HomePage = (props) => {
  return (
    <div className='HomePage'>
      <NavBar
        customer={props.customer}
        handleLogout={props.handleLogout}
      />
    </div>
  );
}

export default HomePage;