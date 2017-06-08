import ordersAPI from './ordersAPI';
import tokenService from './tokenService';

function addItemToCart(item, shop) {
  item.shopName = shop.name;
  item.shopCity = shop.city;
  return ordersAPI.addItemToCart(item)
    .then(token => tokenService.setToken(token));
}

export default {
  addItemToCart
};