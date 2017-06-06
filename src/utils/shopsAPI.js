const BASE_URL = '/api/shops/';

function index() {
  return fetch(BASE_URL)
  .then(res => res.json())
  .then(shops => shops);
}

export default {
  index
};