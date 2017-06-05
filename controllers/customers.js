var Customer = require('../models/customer');
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

function signup(req, res) {
  var customer = new Customer(req.body);
  customer.save()
    .then(customer => {
      res.json({token: createJWT(customer)});
    })
    // customer data invalid
    .catch(err => res.status(400).json(err));
}

function login(req, res) {
  Customer.findOne({email: req.body.email}).exec().then(customer => {
    if (!customer) return res.status(401).json({err: 'bad credentials'});
    customer.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        var token = createJWT(customer);
        res.json({token: createJWT(customer)});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  }).catch(err => res.status(401).json(err));
}

/*----- Helper Functions -----*/

function createJWT(customer) {
  return jwt.sign(
    {customer},
    SECRET,
    {expiresIn: '24h'}
  );
}

module.exports = {
  signup,
  login
};
