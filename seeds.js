require('dotenv').config();
require('./config/database');
var Shop = require('./models/shop');

Shop.remove({}).then(res => {
  Shop.create([
    {
      name: 'Dunkin Donuts',
      city: 'Los Angeles'
    }
  ]).then(res => {
    process.exit();
  });
});