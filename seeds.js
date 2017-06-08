require('dotenv').config();
require('./config/database');
var Shop = require('./models/shop');

Shop.remove({}).then(res => {
  Shop.create([
    { name: 'Kettle Glazed',
      city: 'Los Angeles',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '6211 Franklin Ave, Los Angeles, CA 90028',
      products: 
      [{  name: 'Buttermilk Vanilla Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Blueberry Lemon Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Original Chocolate Drizzle Cronut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: 'SK Donuts',
      city: 'Los Angeles',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '5850 W 3rd St, Los Angeles, CA 90036',
      products: 
      [{  name: 'Strawberry Nutella Cronut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Oreo Cronut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Blueberry Cronut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: 'California Donuts',
      city: 'Los Angeles',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '3540 W 3rd St, Los Angeles, CA 90020',
      products: 
      [{  name: 'Panda Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Blueberry Toast Crunch Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Matcha Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: 'Donut Friend',
      city: 'Los Angeles',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '5107 York Blvd, Los Angeles, CA 90042',
      products: 
      [{  name: 'Husker Blu Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Nutellavision Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Coconut of Conformity Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: 'Cafe Dulce',
      city: 'Los Angeles',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '134 Japanese Village Plz, Los Angeles, CA 90012',
      products: 
      [{  name: 'Bacon Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Fruity Pebble Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Cinnamon Toast Crunch Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: `Randy's Donuts`,
      city: 'Los Angeles',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '',
      products: 
      [{  name: 'Buttermilk Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Coconut Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Sugar Glazed Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: 'DOUGH',
      city: 'New York',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '448 Lafayette Ave, Brooklyn, NY 11205',
      products: 
      [{  name: 'Chocolate Donut w/ Cacao Nibs',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Dulce De Leche Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Salted Chocolate Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: 'Doughnut Plant',
      city: 'New York',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '379 Grand St, New York, NY 10002',
      products: 
      [{  name: 'Tres Leches Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Creme Brulee Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Brooklyn Blackout Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: 'Peter Pan Donut & Pastry Shop',
      city: 'New York',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '727 Manhattan Ave, Brooklyn, NY 11222',
      products: 
      [{  name: `S'mores Donut`,
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Blueberry Cake Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Cream Crumb Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: 'Blackbird Donuts',
      city: 'Boston',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '492 Tremont St, Boston, MA 02116',
      products: 
      [{  name: 'Blackberry Lavender Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Salted Toffee Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Vanilla Glaze Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: 'Union Square Donuts',
      city: 'Boston',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '',
      products: 
      [{  name: 'Sea Salted Bourbon Caramel Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Maple Bacon Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Brown Butter Hazelnut Crunch Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: `Kane's Donuts`,
      city: 'Boston',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '',
      products: 
      [{  name: 'Hibiscus Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Turtle Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Maine Blueberry Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: 'Hypnotic Donuts',
      city: 'Dallas',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '9007 Garland Rd, Dallas, TX 75218',
      products: 
      [{  name: 'Canadian Healthcare Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Evil Elvis Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Old Fashioned Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: 'Glazed Donut Works',
      city: 'Dallas',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '2644 Elm St, Dallas, TX 75226',
      products: 
      [{  name: 'Blueberry Mascarpone Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Elvis Killer Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Old Fashioned Lemon Poppy Seed Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: 'Jarams Donuts',
      city: 'Dallas',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '17459 Preston Rd, Dallas, TX 75252',
      products: 
      [{  name: 'Strawberries & Cream Cheese Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Ferrero Rocher Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Maple & Bacon Cronut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: 'Five Daughters Bakery',
      city: 'Nashville',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '1110 Caruthers Ave, Nashville, TN 37204',
      products: 
      [{  name: 'Vanilla Cream Cronut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Strawberry Lemonade Cronut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Chocolate Sea Salt Cronut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: `Fox's Donut Den`,
      city: 'Nashville',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '3900 Hillsboro Pike, Nashville, TN 37215',
      products: 
      [{  name: 'Cream Filled Chocolate Frosted Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Cro-Do',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Glazed Chocolate Cake Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: 'Shipley DO-Nuts',
      city: 'Nashville',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '2626 Murfreesboro Rd Ste C, Nashville, TN 37217',
      products: 
      [{  name: 'Apple Fritter Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Original Glazed Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Chocolate Covered Donuts',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: 'Voodoo Donuts',
      city: 'Portland',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '22 SW 3rd Ave, Portland, OR 97204',
      products: 
      [{  name: 'Old Dirty Bastard Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Captain My Crunch Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Memphis Mafia Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: 'Blue Star Donuts',
      city: 'Portland',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '1237 SW Washington St, Portland, OR 97205',
      products: 
      [{  name: 'Blueberry Bourbon Basil Glaze Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Chocolate Almond Ganache Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Lemon Poppy Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: `Pip's Original Doughnuts`,
      city: 'Portland',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '4759 NE Fremont St, Portland, OR 97213',
      products: 
      [{  name: 'Dirty Wu Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Cinnamon Sugar Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Nutella & Sea Salt Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: 'Do-Rite Donuts & Coffee',
      city: 'Chicago',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '50 West Randolph St, Chicago, IL 60601',
      products: 
      [{  name: 'Pistachio Meyer-Lemon Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Valrhona Chocolate Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Cinnamon Raised Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: 'Firecakes',
      city: 'Chicago',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '68 W Hubbard St, Chicago, IL 60654',
      products: 
      [{  name: 'Ice Cream Donut Sandwich',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Chocolate Hazelnut Long John Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Triple Chocolate Valrhona Cake Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: 'The Doughnut Vault',
      city: 'Chicago',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '401 1/2 N Franklin St, Chicago, IL 60654',
      products: 
      [{  name: 'Chestnut Glazed Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Vanilla Cocoa Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Pistachio Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: 'Twisted Donuts & Coffee',
      city: 'San Francisco',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '1243 Noriega St, San Francisco, CA 94122',
      products: 
      [{  name: 'Jalapeño Maple Bacon Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: `Blowtorched S'mores Donut`,
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Warriors Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: `Bob’s Donut & Pastry Shop`,
      city: 'San Francisco',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '1621 Polk St, San Francisco, CA 94109',
      products: 
      [{  name: 'Maple Donut w/ Sprinkles',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Crumb Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Giant Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: 'Dynamo Donut & Coffee',
      city: 'San Francisco',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '2760 24th St, San Francisco, CA 94110',
      products: 
      [{  name: 'Maple Glazed Bacon Apple Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Apricot Cardamom Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Lemon Thyme Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: 'District Doughnut and Coffee',
      city: 'Washington, D.C.',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '749 8th St SE, Washington, DC 20003',
      products: 
      [{  name: 'Brown Butter Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Vanilla Bean Glazed Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Salted Dulce De Leche Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: 'Astro Doughnuts & Fried Chicken',
      city: 'Washington, D.C.',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '1308 G St NW, Washington, DC 20005',
      products: 
      [{  name: 'PB&J Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Maple Bacon Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Vanilla Glazed Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: 'DC-Donuts',
      city: 'Washington, D.C.',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '225 7th St SE, Washington, DC 20003',
      products: 
      [{  name: 'Maple Bacon Chocolate Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Blackout Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Mini Donuts',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: 'Mighty-O Donuts',
      city: 'Seattle',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '2110 N 55th St, Seattle, WA 98103',
      products: 
      [{  name: 'French Toast Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Don King Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Cocoloco Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: 'Top Pot Doughnuts',
      city: 'Seattle',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '2124 5th Ave, Seattle, WA 98121',
      products: 
      [{  name: 'Pink Feather Boa Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Raspberry Glazed Cake Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Cherry Blossom Cake donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: 'Daily Dozen Doughnut',
      city: 'Seattle',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: 'Pike Place Market',
      products: 
      [{  name: 'Plain Mini Donuts',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Cinnamon Mini Donuts',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Powdered Mini Donuts',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: 'Federal Donuts',
      city: 'Philadelphia',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '1632 Sansom St, Philadelphia, PA 19103',
      products: 
      [{  name: 'Chocolate Covered Strawberry Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Marshmallow Marshmallow Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Cookies & Cream Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: `Beiler's Bakery`,
      city: 'Philadelphia',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '51 N 12th St, Philadelphia, PA 19107',
      products: 
      [{  name: 'Blueberry Fritter Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Salted Caramel Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Mocha Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: `Dottie's Donuts`,
      city: 'Philadelphia',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '4529 Springfield Ave, Philadelphia, PA 19143',
      products: 
      [{  name: 'Boston Cream Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Pineapple Sugar Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Cinnamon Bun Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: 'Habit Doughnut Dispensary',
      city: 'Denver',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '1553 Platte St, Denver, CO 80202',
      products: 
      [{  name: 'Blueberry Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Habit Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Mexican Chocolate Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: 'The Donut House',
      city: 'Denver',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '3124 S Parker Rd, Aurora, CO 80014',
      products: 
      [{  name: 'White Glaze Dipped Cake Donut w/ Nuts ',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Chocolate Dipped Vanilla Cake Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Strawberry & Bavarian Cream Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    },

    { name: 'Holy Donuts Dot Coffee',
      city: 'Denver',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '',
      products: 
      [{  name: 'Samoa Cookie Cake Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' },
        { name: 'Maple Bacon Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg'  },
        {  name: 'Lemon Poppyseed Donut',
          price: 3,
          image: 'https://t4.ftcdn.net/jpg/01/09/72/13/240_F_109721356_4S3ZXUsLGagFwLQTfqeM3UCqgilBa2aU.jpg' }]
    }

  ]).then(res => {
    process.exit();
  });
});