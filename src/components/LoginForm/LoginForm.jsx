import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import customerService from '../../utils/customerService';
import './LoginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pw: ''
    }
  }

  handleChange = (field, e) => {
    this.props.updateMessage('');
    this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let self = this;
    customerService.login(self.state)
      .then(() => {
        self.props.handleLogin();
        self.props.history.push('/');
      })
      .catch(err => self.props.updateMessage(err.message));
  }

  render() {
    return (
      <div className='Login-form'>
        <h4>Log In</h4>
        <form className='form-horizontal' onSubmit={this.handleSubmit} >
          <div className='form-group'>
            <div className='col-sm-12'>
              <input type='email' className='form-control' placeholder='Email' value={this.state.email} onChange={(e) => this.handleChange('email', e)} />
            </div>
          </div>
          <div className='form-group'>
            <div className='col-sm-12'>
              <input type='password' className='form-control' placeholder='Password' value={this.state.pw} onChange={(e) => this.handleChange('pw', e)} />
            </div>
          </div>
          <div className='form-group'>
            <div className='col-sm-12 text-center'>
              <button className='btn btn-default'>Log In</button>&nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default LoginForm;