function setToken(token) {
  if (token) {
    localStorage.setItem('token', token);
  } else {
    localStorage.removeItem('token');
  }
}

function getToken() {
  var token = localStorage.getItem('token');
  if (token) {
    var payload = JSON.parse(atob(token.split('.')[1]));
    if (payload.exp < Date.now() / 1000) {
      localStorage.removeItem('token');
      token = null;
    }
  }
  return token;
}

function getCustomerFromToken() {
  var token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).customer : null;
}

function removeToken() {
  localStorage.removeItem('token');
}

export default {
  setToken,
  getToken,
  getCustomerFromToken,
  removeToken
};