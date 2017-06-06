const BASE_URL = '/api/cities/';

function index() {
  return fetch(BASE_URL)
  .then(res => res.json())
  .then(cities => cities);
}

export default {
  index
};