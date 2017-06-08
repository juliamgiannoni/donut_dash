var express = require('express');
var router = express.Router();
var ordersController = require('../../controllers/orders');

/*---------- Protected Routes ----------*/
router.get('/mycart', checkAuth, ordersController.showCart);
router.post('/additemtocart', checkAuth, ordersController.addItemToCart);

/*----- Helper Functions -----*/

function checkAuth(req, res, next) {
  if (req.customer) return next();
  return res.status(401).json({msg: 'not authenticated'});
}

module.exports = router;