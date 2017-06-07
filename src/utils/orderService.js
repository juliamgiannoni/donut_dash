import ordersAPI from './ordersAPI';
import tokenService from './tokenService';

function addItemToCart(item) {
  return ordersAPI.addItemToCart(item)
    .then(token => tokenService.setToken(token));
}

export default {
  addItemToCart
};