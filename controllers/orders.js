var Order = require('./../models/order')
var Customer = require('./../models/customer')
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

var ordersController = {

  addItemToCart: function(req, res, next) {
    console.log('orderscontroller STATE: ', this.state)
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
      console.log('orderscontroller REQBODY: ', req.body)
      console.log('orderscontroller CART: ', customer.cart)
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

  updateCart: function(req, res, next) {
    Order.findById(req.params.id, function(err, order) {
      if (err) return res.redirect('/myorders');
      res.render('edit', { order: order, customer: req.customer });
    });
  },

  delete: function(req, res, next) {
    Order.findByIdAndRemove(req.params.id, function(err) {
      if (err) return res.redirect('/');
      res.redirect('/myorders');
    });
  },

};

function createJWT(customer) {
  return jwt.sign(
    {customer},
    SECRET,
    {expiresIn: '24h'}
  );
}

module.exports = ordersController;
