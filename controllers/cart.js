var Customer = require('./../models/customer')
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

var cartController = {

  addItemToCart: function(req, res, next) {
    Customer.findById(req.customer._id).exec().then(customer => {
      delete req.body._id;
      customer.cart.push({
        quantity: 1,
        shopName: req.body.shopName,
        shopCity: req.body.shopCity,
        name: req.body.name,
        price: req.body.price,
        image: req.body.image
      });
      customer.save().then(() => {
        res.json({token: createJWT(customer)});
      });
    })
  },

  showCart: function(req, res, next) {
    Customer.findById(req.customer._id).exec().then(customer => {
      res.render('show', { req: req, customer: req.customer });
    })
  },

  clearCart: function(req, res, next) {
    Customer.findById(req.customer._id).exec().then(customer => {
      delete req.body._id;
      customer.cart = [];
      customer.save().then(() => {
        res.json({token: createJWT(customer)});
      });
    })
  },


};

function createJWT(customer) {
  return jwt.sign(
    {customer},
    SECRET,
    {expiresIn: '24h'}
  );
}

module.exports = cartController;