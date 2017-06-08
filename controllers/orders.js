var Order = require('./../models/order')
var Customer = require('./../models/customer')
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

var ordersController = {

  addItemToCart: function(req, res, next) {
    Customer.findById(req.customer._id).exec().then(customer => {
      delete req.body._id;
      customer.cart.push(req.body);
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

  index: function(req, res, next) {
    Order.find({}, (err, orders) => {
        res.render('index', { req: req, orders: orders, customer: req.customer });
    });
  },



  edit: function(req, res, next) {
    Order.findById(req.params.id, function(err, order) {
      if (err) return res.redirect('/myorders');
      res.render('edit', { order: order, customer: req.customer });
    });
  },

  update: function(req, res, next) {
    Order.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, order) {
      order.save(function(err, savedOrder) {
        if (err) return res.redirect('/');
        res.redirect('/myorders');
      });
    })
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
