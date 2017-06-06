import React, {Component} from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import NavBar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import './SignupPage.css';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div className='SignupPage'>
        <NavBar
        customer={this.props.customer}
        handleLogout={this.props.handleLogout}
        />
        <Header />
        <SignupForm 
          {...this.props} 
          updateMessage={this.updateMessage}
        />
        <p>{this.state.message}</p>
      </div>
    );
  }
};

export default SignupPage;