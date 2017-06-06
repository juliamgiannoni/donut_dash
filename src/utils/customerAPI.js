const BASE_URL = '/api/customers/';

function signup(customer) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(customer)
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Email already taken!');
  })
  .then(({token}) => token);
}

function login(customer) {
  return fetch(BASE_URL + 'login', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(customer)
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Bad credentials');
  })
  .then(({token}) => token);
}

export default {
  signup,
  login
};