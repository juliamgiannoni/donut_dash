var Customer = require('../models/customer');
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

module.exports = function(req, res, next) {
  var token = req.body.token || req.query.token || req.get('Authorization');
  if (token) {
    token = token.replace('Bearer ', '');
    jwt.verify(token, SECRET, function(err, decoded) {
      if (!err) {
        req.customer = decoded.customer;    
        next();
      }
    });
  } else {
    next();
  }
}