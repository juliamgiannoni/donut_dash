import React, {Component} from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import NavBar from '../../components/Navbar/Navbar';
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
      <div className='LoginPage'>
        <NavBar
          customer={this.props.customer}
          handleLogout={this.props.handleLogout}
        />
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