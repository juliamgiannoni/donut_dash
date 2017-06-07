var Shop = require('../models/Shop');

function index(req, res) {
  Shop.find({}, function(err, shops) {
    if (err) {
      console.log(err);
    }
    res.json(shops)
  })
}


module.exports = {
  index
};