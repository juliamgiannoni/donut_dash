var express = require('express');
var router = express.Router();
var cartController = require('../../controllers/cart');

/*---------- Protected Routes ----------*/
router.get('/myorder', checkAuth, cartController.showCart);
router.post('/additemtocart', checkAuth, cartController.addItemToCart);

/*----- Helper Functions -----*/

function checkAuth(req, res, next) {
  if (req.customer) return next();
  return res.status(401).json({msg: 'not authenticated'});
}

module.exports = router;