var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
  name: String,
  price: Number,
  image: String
})

var shopSchema = new Schema({
  name: String,
  city: String,
  image: String,
  address: String,
  products: [productSchema]
}, {
  timestamps: true
})

module.exports = mongoose.model('Shop', shopSchema);