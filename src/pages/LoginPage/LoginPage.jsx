import React, {Component} from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import './LoginPage.css';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }


  render() {
    return (
      <div>
        <Navbar
          customer={this.props.customer}
          handleLogout={this.props.handleLogout}
        />
        <Header />
        <LoginForm
          {...this.props}
          updateMessage={this.updateMessage}
        />
        <p>{this.state.message}</p>
      </div>
    );
  }
};

export default LoginPage;