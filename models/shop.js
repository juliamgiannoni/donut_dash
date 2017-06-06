var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
  name: String,
  price: Float,
  image: String
})

var shopSchema = new Schema({
  name: String,
  city: String,
  image: String,
  products: [productSchema]

}, {
  timestamps: true
})

module.exports = mongoose.model('Shop', shopSchema);