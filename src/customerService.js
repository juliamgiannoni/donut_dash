import customerAPI from './customerAPI';
import tokenService from './tokenService';

function signup(customer) {
  return customerAPI.signup(customer)
    .then(token => tokenService.setToken(token));
}

function getCustomer() {
  return tokenService.getCustomerFromToken();
}

function logout() {
  tokenService.removeToken();
}

function login(customer) {
  return customerAPI.login(customer)
    .then(token => tokenService.setToken(token));
}

export default {
  signup,
  getCustomer,
  logout,
  login
}