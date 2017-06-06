var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shopSchema = new Schema({
  name: String,
  city: String

}, {
  timestamps: true
})

module.exports = mongoose.model('Shop', shopSchema);