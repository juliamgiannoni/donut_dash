require('dotenv').config();
require('./config/database');
var Shop = require('./models/shop');

Shop.remove({}).then(res => {
  Shop.create([
    {
      name: 'Dunkin Donuts',
      city: 'Boston',
      image: 'http://crevisio.com/images/posts/132/YyNnsKJsu/Crevisio-132-YyNnsKJsu.jpg',
      products: [
        {
          name: 'Boston Cream Pie Donut',
          price: 3,
          image: 'http://farm4.staticflickr.com/3736/9105498816_651924888d_z.jpg'
        },
        {
          name: 'Original Glazed',
          price: 2,
          image: 'http://dinnerthendessert.com/wp-content/uploads/2015/12/Krispy-Kreme-Doughnuts-V2.jpg'
        }
      ]
    },
    {
      name: 'Union Square Donuts',
      city: 'Boston',
      image: 'http://crevisio.com/images/posts/132/YyNnsKJsu/Crevisio-132-YyNnsKJsu.jpg'
    },
    {
      name: 'Blackbird Donuts',
      city: 'Boston',
      image: 'http://crevisio.com/images/posts/132/YyNnsKJsu/Crevisio-132-YyNnsKJsu.jpg'
    },
    {
      name: 'blue star donuts',
      city: 'Los Angeles',
      image: 'http://crevisio.com/images/posts/132/YyNnsKJsu/Crevisio-132-YyNnsKJsu.jpg'
    },
    {
      name: 'donut shop',
      city: 'Washington, D.C.',
      image: 'http://crevisio.com/images/posts/132/YyNnsKJsu/Crevisio-132-YyNnsKJsu.jpg'
    },
    {
      name: 'five daughters bakery',
      city: 'Nashville',
      image: 'http://crevisio.com/images/posts/132/YyNnsKJsu/Crevisio-132-YyNnsKJsu.jpg'
    }
  ]).then(res => {
    process.exit();
  });
});