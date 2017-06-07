var Shop = require('../models/Shop');

function index(req, res) {
  console.log('inside shop controller');
  Shop.find({}, function(err, shops) {
    if (err) {
      console.log(err);
    }
    console.log(shops);
    res.json(shops)
  })
}


module.exports = {
  index
};