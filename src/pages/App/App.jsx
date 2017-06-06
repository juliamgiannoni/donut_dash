import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import logo from '../../logo.svg';
import './App.css';
import customerService from '../../utils/customerService';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/HomePage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  /*---------- Callback Methods ----------*/

  handleLogout = () => {
    customerService.logout();
    this.setState({customer: null});
  }

  handleSignup = () => {
    this.setState({customer: customerService.getCustomer()});
  }

  handleLogin = () => {
    this.setState({customer: customerService.getCustomer()});
  }

  /*---------- Lifecycle Methods ----------*/

  componentDidMount() {
    let customer = customerService.getCustomer();
    this.setState({customer});
  }

  render() {
    return (
      <div className='container App-container'>
        <Router>
          <Switch>
            <Route exact path='/' render={() =>
              <HomePage
                customer={this.state.customer}
                handleLogout={this.handleLogout}
              />
            }/>
            <Route exact path='/signup' render={(props) => 
              <SignupPage 
                {...props}
                handleSignup={this.handleSignup}
              />
            }/>
            <Route exact path='/login' render={(props) => 
              <LoginPage
                {...props}
                handleLogin={this.handleLogin}
              />
            }/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
