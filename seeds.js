require('dotenv').config();
require('./config/database');
var Shop = require('./models/shop');

Shop.remove({}).then(res => {
  Shop.create([
    {
      name: 'Dunkin Donuts',
      city: 'boston',
      image: 'http://crevisio.com/images/posts/132/YyNnsKJsu/Crevisio-132-YyNnsKJsu.jpg'
    },
    {
      name: 'Union Square Donuts',
      city: 'boston',
      image: 'http://crevisio.com/images/posts/132/YyNnsKJsu/Crevisio-132-YyNnsKJsu.jpg'
    },
    {
      name: 'Blackbird Donuts',
      city: 'boston',
      image: 'http://crevisio.com/images/posts/132/YyNnsKJsu/Crevisio-132-YyNnsKJsu.jpg'
    }
  ]).then(res => {
    process.exit();
  });
});