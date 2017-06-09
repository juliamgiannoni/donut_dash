var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
const SALT_ROUNDS = 6;

var cartSchema = new Schema({
  quantity: Number,
  shopName: String,
  shopCity: String,
  name: String,
  price: Number,
  image: String
})

var customerSchema = new mongoose.Schema({
  name: String,
  email: {type: String, required: true, lowercase: true, unique: true},
  password: String,
  orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
  cart: [cartSchema]
}, {
  timestamps: true
});

customerSchema.set('toJSON', {
  transform: function(doc, ret) {
    delete ret.password;
    return ret;
  }
});

customerSchema.methods.comparePassword = function(tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

customerSchema.pre('save', function(next) {
  var customer = this;
  if (!customer.isModified('password')) return next();
  bcrypt.hash(customer.password, SALT_ROUNDS, function(err, hash) {
    if (err) return next(err);
    customer.password = hash;
    next();
  });
});

module.exports = mongoose.model('Customer', customerSchema);