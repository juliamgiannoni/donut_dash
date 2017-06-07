var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lineItemSchema = new Schema({
  quantity: Number,
  shopName: String,
  shopCity: String,
  productName: String,
  productPrice: Number,
  productImage: String
})

var orderSchema = new Schema({
  lineItems: [lineItemSchema],
  price: Number,
  tax: Number,
  tip: Number,
  address: String,
  time: String,
  date: String,
  notes: String
})

module.exports = mongoose.model('Order', orderSchema);