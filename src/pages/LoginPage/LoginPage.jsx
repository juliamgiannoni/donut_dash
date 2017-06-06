import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import NavBar from '../../components/Navbar/Navbar';
import './LoginPage.css';


const LoginPage = (props) => {
  return (
    <div className='LoginPage'>
      <NavBar
        customer={props.customer}
        handleLogout={props.handleLogout}
      />
      <LoginForm 
        {...props}
      />
    </div>
  );
};

export default LoginPage;