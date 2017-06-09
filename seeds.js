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
          image: 'https://s3-media2.fl.yelpcdn.com/bphoto/24Kt2Ft8H2QKQnfCqWR7og/o.jpg' },
        { name: 'Blueberry Lemon Donut',
          price: 3,
          image: 'https://s3-media1.fl.yelpcdn.com/bphoto/oocy1W6f8CSBwcW_CZYIgA/o.jpg'  },
        {  name: 'Original Chocolate Drizzle Cronut',
          price: 3,
          image: 'https://s3-media3.fl.yelpcdn.com/bphoto/i65JZbDWqa-H4DbjrVgvOg/o.jpg' }]
    },

    { name: 'SK Donuts',
      city: 'Los Angeles',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '5850 W 3rd St, Los Angeles, CA 90036',
      products: 
      [{  name: 'Strawberry Nutella Cronut',
          price: 3,
          image: 'https://s3-media1.fl.yelpcdn.com/bphoto/57WRgb4lrJaIXMfZCz_8Nw/348s.jpg' },
        { name: 'Oreo Cronut',
          price: 3,
          image: 'https://s3-media4.fl.yelpcdn.com/bphoto/i3X2jSukprP8ZCpg5V3HpA/ls.jpg'  },
        {  name: 'Blueberry Cronut',
          price: 3,
          image: 'https://s3-media2.fl.yelpcdn.com/bphoto/VDtIOtT9jWVbjqTp_h8aMg/348s.jpg' }]
    },

    { name: 'California Donuts',
      city: 'Los Angeles',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '3540 W 3rd St, Los Angeles, CA 90020',
      products: 
      [{  name: 'Panda Donut',
          price: 3,
          image: 'https://s3-media4.fl.yelpcdn.com/bphoto/zHJMQTajoknSRaVitQDsEA/o.jpg' },
        { name: 'Blueberry Toast Crunch Donut',
          price: 3,
          image: 'https://s3-media1.fl.yelpcdn.com/bphoto/mP3Ju3mQ4jAQipTZoXMBdQ/348s.jpg'  },
        {  name: 'Matcha Donut',
          price: 3,
          image: 'https://s3-media2.fl.yelpcdn.com/bphoto/_3a_JOXZXCg3Xa-XgqCSyw/o.jpg' }]
    },

    { name: 'Donut Friend',
      city: 'Los Angeles',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '5107 York Blvd, Los Angeles, CA 90042',
      products: 
      [{  name: 'Husker Blu Donut',
          price: 3,
          image: 'https://s3-media3.fl.yelpcdn.com/bphoto/auaC_E9rx1B7Fhf6DaOL7w/o.jpg' },
        { name: 'Nutellavision Donut',
          price: 3,
          image: 'https://s3-media2.fl.yelpcdn.com/bphoto/3vgcQF6fb2BZQqsC9TCGlQ/o.jpg'  },
        {  name: 'Coconut of Conformity Donut',
          price: 3,
          image: 'https://s3-media1.fl.yelpcdn.com/bphoto/fdVPqOGeDe_ShI1ohpxgJA/348s.jpg' }]
    },

    { name: 'Cafe Dulce',
      city: 'Los Angeles',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '134 Japanese Village Plz, Los Angeles, CA 90012',
      products: 
      [{  name: 'Bacon Donut',
          price: 3,
          image: 'https://s3-media1.fl.yelpcdn.com/bphoto/2Xtv-44eg-sqK0UDbCMaIg/ls.jpg' },
        { name: 'Fruity Pebble Donut',
          price: 3,
          image: 'https://s3-media4.fl.yelpcdn.com/bphoto/9_TrjEHNFKQJG4MICFEGgA/348s.jpg'  },
        {  name: 'Cinnamon Toast Crunch Donut',
          price: 3,
          image: 'https://s3-media4.fl.yelpcdn.com/bphoto/QqS_C3TbEg27Sau8ZDwJXw/o.jpg' }]
    },

    { name: `Randy's Donuts`,
      city: 'Los Angeles',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '',
      products: 
      [{  name: 'Buttermilk Donut',
          price: 3,
          image: 'https://s3-media4.fl.yelpcdn.com/bphoto/FpJQ6HpFvwEg_y7qr6nmWQ/348s.jpg' },
        { name: 'Chocolate Sprinkles Donut',
          price: 3,
          image: 'https://s3-media2.fl.yelpcdn.com/bphoto/heaafncmcF9SCUZcjpMt3w/ls.jpg'  },
        {  name: 'Glazed Donut',
          price: 3,
          image: 'https://s3-media4.fl.yelpcdn.com/bphoto/P2_sDvuBMUBjMGhPQ5132Q/o.jpg' }]
    },

    { name: 'DOUGH',
      city: 'New York',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '448 Lafayette Ave, Brooklyn, NY 11205',
      products: 
      [{  name: 'Chocolate Donut w/ Cacao Nibs',
          price: 3,
          image: 'https://s3-media3.fl.yelpcdn.com/bphoto/brC9ULpVVvuw1rEADPfYYw/o.jpg' },
        { name: 'Dulce De Leche Donut',
          price: 3,
          image: 'https://s3-media1.fl.yelpcdn.com/bphoto/FhkEAWXdDkStiYMNE2Rvbg/o.jpg'  },
        {  name: 'Salted Chocolate Donut',
          price: 3,
          image: 'https://s3-media1.fl.yelpcdn.com/bphoto/aTrZj6B42_q3jWJtCRGPWg/o.jpg' }]
    },

    { name: 'Doughnut Plant',
      city: 'New York',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '379 Grand St, New York, NY 10002',
      products: 
      [{  name: 'Tres Leches Donut',
          price: 3,
          image: 'https://s3-media3.fl.yelpcdn.com/bphoto/thSo9CoPjKzZfZ623xZ1NA/o.jpg' },
        { name: 'Creme Brulee Donut',
          price: 3,
          image: 'https://s3-media3.fl.yelpcdn.com/bphoto/KwFLq4iwpERjCX_Cnyfj2w/o.jpg'  },
        {  name: 'Brooklyn Blackout Donut',
          price: 3,
          image: 'https://s3-media2.fl.yelpcdn.com/bphoto/5tQhMcJ_H4hzHmIOsZqMeQ/348s.jpg' }]
    },

    { name: 'Peter Pan Donut & Pastry Shop',
      city: 'New York',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '727 Manhattan Ave, Brooklyn, NY 11222',
      products: 
      [{  name: `S'mores Donut`,
          price: 3,
          image: 'https://s3-media4.fl.yelpcdn.com/bphoto/r2RRfOh67dYiHbOrPUI7OA/o.jpg' },
        { name: 'Blueberry Cake Donut',
          price: 3,
          image: 'https://s3-media2.fl.yelpcdn.com/bphoto/81LokDSdEB4hZ95xK8TKYg/348s.jpg'  },
        {  name: 'Cream Crumb Donut',
          price: 3,
          image: 'https://s3-media2.fl.yelpcdn.com/bphoto/XugVsZwC_d1h20ZjpKD5ug/348s.jpg' }]
    },

    { name: 'Blackbird Donuts',
      city: 'Boston',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '492 Tremont St, Boston, MA 02116',
      products: 
      [{  name: 'Blackberry Lavender Donut',
          price: 3,
          image: 'https://s3-media2.fl.yelpcdn.com/bphoto/Xx-iVVtTGWEhCc-tAjeO_Q/348s.jpg' },
        { name: 'Salted Toffee Donut',
          price: 3,
          image: 'https://s3-media2.fl.yelpcdn.com/bphoto/LwUCOOseAz0ymyRQuLVMUg/o.jpg'  },
        {  name: 'Vanilla Glaze Donut',
          price: 3,
          image: 'https://s3-media2.fl.yelpcdn.com/bphoto/3V5OsOfACZrWIoR955z4KA/348s.jpg' }]
    },

    { name: 'Union Square Donuts',
      city: 'Boston',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '20 Bow St, Somerville, MA 02143',
      products: 
      [{  name: 'Sea Salted Bourbon Caramel Donut',
          price: 3,
          image: 'https://s3-media1.fl.yelpcdn.com/bphoto/SfdfXHQBrqAzmYgKKJfmUA/348s.jpg' },
        { name: 'Maple Bacon Donut',
          price: 3,
          image: 'https://s3-media2.fl.yelpcdn.com/bphoto/Wdib9zjFbrGZuxJ8v-WjhQ/o.jpg'  },
        {  name: 'Brown Butter Hazelnut Crunch Donut',
          price: 3,
          image: 'https://s3-media3.fl.yelpcdn.com/bphoto/GwsMb5luY7lMHJdjoNmv1w/ls.jpg' }]
    },

    { name: `Kane's Donuts`,
      city: 'Boston',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '90 Oliver St, Boston, MA 02110',
      products: 
      [{  name: 'Hibiscus Donut',
          price: 3,
          image: 'https://s3-media2.fl.yelpcdn.com/bphoto/-k1ZDRfR9h3vzod80UIeHg/o.jpg' },
        { name: 'Turtle Donut',
          price: 3,
          image: 'https://s3-media1.fl.yelpcdn.com/bphoto/M7bfhEHZny95Q0OkyEVXYA/o.jpg'  },
        {  name: 'Maine Blueberry Donut',
          price: 3,
          image: 'https://s3-media4.fl.yelpcdn.com/bphoto/nEMzZtpCyXIUyBPakgpeZA/o.jpg' }]
    },

    { name: 'Hypnotic Donuts',
      city: 'Dallas',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '9007 Garland Rd, Dallas, TX 75218',
      products: 
      [{  name: 'Canadian Healthcare Donut',
          price: 3,
          image: 'https://s3-media1.fl.yelpcdn.com/bphoto/ttgT_ke3cmi_sMbg3LjypQ/o.jpg' },
        { name: 'Evil Elvis Donut',
          price: 3,
          image: 'https://s3-media4.fl.yelpcdn.com/bphoto/D6RlEPQ_j49RJVF0kbKITw/o.jpg'  },
        {  name: 'Blueberry Cake Donut',
          price: 3,
          image: 'https://s3-media1.fl.yelpcdn.com/bphoto/R0Y_gtQyqfef9bVvkbBXFQ/258s.jpg' }]
    },

    { name: 'Glazed Donut Works',
      city: 'Dallas',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '2644 Elm St, Dallas, TX 75226',
      products: 
      [{  name: 'Blueberry Mascarpone Donut',
          price: 3,
          image: 'https://s3-media4.fl.yelpcdn.com/bphoto/KbP1Sr7XqTukc5Jc02zVgw/ls.jpg' },
        { name: 'Elvis Killer Donut',
          price: 3,
          image: 'https://s3-media1.fl.yelpcdn.com/bphoto/gfy5vycTOf8LhCquoOSeQg/o.jpg'  },
        {  name: 'Strawberry & Whipped Cream Filled Donut',
          price: 3,
          image: 'https://s3-media3.fl.yelpcdn.com/bphoto/c__tzk4CRqM_qWHIGJv3cQ/o.jpg' }]
    },

    { name: 'Jarams Donuts',
      city: 'Dallas',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '17459 Preston Rd, Dallas, TX 75252',
      products: 
      [{  name: 'Strawberries & Cream Cheese Donut',
          price: 3,
          image: 'https://s3-media1.fl.yelpcdn.com/bphoto/zGIoGfY-ia-dFKQEqsU9tA/o.jpg' },
        { name: 'Ferrero Rocher Donut',
          price: 3,
          image: 'https://s3-media3.fl.yelpcdn.com/bphoto/3ZkTAcTLdqcMfcrDIfHIvA/o.jpg'  },
        {  name: 'Maple & Bacon Cronut',
          price: 3,
          image: 'https://s3-media4.fl.yelpcdn.com/bphoto/wDfkTk7ZbXF1ADYNUCaPkg/o.jpg' }]
    },

    { name: 'Five Daughters Bakery',
      city: 'Nashville',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '1110 Caruthers Ave, Nashville, TN 37204',
      products: 
      [{  name: 'Vanilla Cream Cronut',
          price: 3,
          image: 'https://s3-media1.fl.yelpcdn.com/bphoto/o_SB5GhlwFsMvDQtW5qi7A/o.jpg' },
        { name: 'Strawberry Lemonade Cronut',
          price: 3,
          image: 'https://s3-media3.fl.yelpcdn.com/bphoto/1A_lgS0LDpV-ahncv3b37g/258s.jpg'  },
        {  name: 'Chocolate Sea Salt Cronut',
          price: 3,
          image: 'https://s3-media2.fl.yelpcdn.com/bphoto/orgCevCt4TXoNcUz8zDXlA/348s.jpg' }]
    },

    { name: `Fox's Donut Den`,
      city: 'Nashville',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '3900 Hillsboro Pike, Nashville, TN 37215',
      products: 
      [{  name: 'Cream Filled Chocolate Frosted Donut',
          price: 3,
          image: 'https://s3-media2.fl.yelpcdn.com/bphoto/oYxQlK4yROKuCL2p_jq71Q/o.jpg' },
        { name: 'Cro-Do',
          price: 3,
          image: 'https://s3-media2.fl.yelpcdn.com/bphoto/9cc_LD04xKsWB16yadRnuw/o.jpg'  },
        {  name: 'Glazed Chocolate Cake Donut',
          price: 3,
          image: 'https://s3-media1.fl.yelpcdn.com/bphoto/NRr14zRUImkN_EpccibjUg/258s.jpg' }]
    },

    { name: 'Shipley DO-Nuts',
      city: 'Nashville',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '2626 Murfreesboro Rd Ste C, Nashville, TN 37217',
      products: 
      [{  name: 'Apple Fritter Donut',
          price: 3,
          image: 'https://s3-media1.fl.yelpcdn.com/bphoto/EAPoee6B9yQw5V8LMZDzoA/ls.jpg' },
        { name: 'Original Glazed Donut',
          price: 3,
          image: 'https://s3-media1.fl.yelpcdn.com/bphoto/XvrHXIERsRdtn_A31F-sGA/ls.jpg'  },
        {  name: 'Chocolate Covered Donut',
          price: 3,
          image: 'https://s3-media1.fl.yelpcdn.com/bphoto/DOZVSTSElkGSwuPmu87UdQ/348s.jpg' }]
    },

    { name: 'Voodoo Donuts',
      city: 'Portland',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '22 SW 3rd Ave, Portland, OR 97204',
      products: 
      [{  name: 'Old Dirty Bastard Donut',
          price: 3,
          image: 'https://s3-media2.fl.yelpcdn.com/bphoto/LZ1kv2xQBDFikk1K0tceeg/o.jpg' },
        { name: 'Captain My Crunch Donut',
          price: 3,
          image: 'https://s3-media1.fl.yelpcdn.com/bphoto/FlubTdVc9DzKmUEEQJRjYA/ls.jpg'  },
        {  name: 'Memphis Mafia Donut',
          price: 3,
          image: 'https://s3-media4.fl.yelpcdn.com/bphoto/H9zTI9I9oTUzdcajCz-wPg/180s.jpg' }]
    },

    { name: 'Blue Star Donuts',
      city: 'Portland',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '1237 SW Washington St, Portland, OR 97205',
      products: 
      [{  name: 'Blueberry Bourbon Basil Glaze Donut',
          price: 3,
          image: 'https://s3-media1.fl.yelpcdn.com/bphoto/vUPQaEQkCtcYdKzWVWT0dg/o.jpg' },
        { name: 'Chocolate Almond Ganache Donut',
          price: 3,
          image: 'https://s3-media4.fl.yelpcdn.com/bphoto/gJ-3BGU7cchhKB0o7tPQQw/o.jpg'  },
        {  name: 'Lemon Poppy Donut',
          price: 3,
          image: 'https://s3-media2.fl.yelpcdn.com/bphoto/ECfNr1EShcFCeihm8qtldg/o.jpg' }]
    },

    { name: `Pip's Original Doughnuts`,
      city: 'Portland',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '4759 NE Fremont St, Portland, OR 97213',
      products: 
      [{  name: 'Dirty Wu Donuts',
          price: 3,
          image: 'https://s3-media3.fl.yelpcdn.com/bphoto/exJhA8WtqWBQjMcV7o60Ww/348s.jpg' },
        { name: 'Cinnamon Sugar Donut',
          price: 3,
          image: 'https://s3-media4.fl.yelpcdn.com/bphoto/2ZfBOpkznqe2iqn0th5h_g/258s.jpg'  },
        {  name: 'Nutella & Sea Salt Donut',
          price: 3,
          image: 'https://s3-media2.fl.yelpcdn.com/bphoto/i8Pm4Y0fA2QRiPs1sFiiew/348s.jpg' }]
    },

    { name: 'Do-Rite Donuts & Coffee',
      city: 'Chicago',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '50 West Randolph St, Chicago, IL 60601',
      products: 
      [{  name: 'Pistachio Meyer-Lemon Donut',
          price: 3,
          image: 'https://s3-media2.fl.yelpcdn.com/bphoto/lSDH9uufRWVuxvPycxBFJw/258s.jpg' },
        { name: 'Valrhona Chocolate Donut',
          price: 3,
          image: 'https://s3-media2.fl.yelpcdn.com/bphoto/Q6HLzitd10EeH5jRqbYohQ/ls.jpg'  },
        {  name: 'Cinnamon Raised Donut',
          price: 3,
          image: 'https://s3-media1.fl.yelpcdn.com/bphoto/nJZCO16RyFZsTDlWgrBCyw/258s.jpg' }]
    },

    { name: 'Firecakes',
      city: 'Chicago',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '68 W Hubbard St, Chicago, IL 60654',
      products: 
      [{  name: 'Ice Cream Donut Sandwich',
          price: 3,
          image: 'https://s3-media4.fl.yelpcdn.com/bphoto/Cn6MENZP_9fp_5rtpxUmsg/348s.jpg' },
        { name: 'Chocolate Hazelnut Long John Donut',
          price: 3,
          image: 'https://s3-media2.fl.yelpcdn.com/bphoto/LKhAyHNMsxnbOQ8kV9IUqg/348s.jpg'  },
        {  name: 'Triple Chocolate Valrhona Cake Donut',
          price: 3,
          image: 'https://s3-media2.fl.yelpcdn.com/bphoto/AfENKRvquQtljCXbwjr_Aw/180s.jpg' }]
    },

    { name: 'The Doughnut Vault',
      city: 'Chicago',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '401 1/2 N Franklin St, Chicago, IL 60654',
      products: 
      [{  name: 'Chestnut Glazed Donut',
          price: 3,
          image: 'https://s3-media3.fl.yelpcdn.com/bphoto/pXFCxTHg8p5rGVRBv9uiIA/ls.jpg' },
        { name: 'Vanilla Cocoa Donut',
          price: 3,
          image: 'https://s3-media2.fl.yelpcdn.com/bphoto/AgWSq0jdWfidIDu2WMLfdA/ls.jpg'  },
        {  name: 'Pistachio Donut',
          price: 3,
          image: 'https://s3-media4.fl.yelpcdn.com/bphoto/lD-Sy_WMUBXUdhc4yBhs5g/258s.jpg' }]
    },

    { name: 'Twisted Donuts & Coffee',
      city: 'San Francisco',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '1243 Noriega St, San Francisco, CA 94122',
      products: 
      [{  name: 'Jalapeño Maple Bacon Donut',
          price: 3,
          image: 'https://s3-media3.fl.yelpcdn.com/bphoto/vpgBHcf_R8Xl6efo4wl2vw/o.jpg' },
        { name: `Blowtorched S'mores Donut`,
          price: 3,
          image: 'https://s3-media3.fl.yelpcdn.com/bphoto/fKwn97qrzdZjBS5V0WmD1g/o.jpg'  },
        {  name: 'Warriors Donut',
          price: 3,
          image: 'https://s3-media1.fl.yelpcdn.com/bphoto/tBE05wepj5He-jjMIkexkw/o.jpg' }]
    },

    { name: `Bob’s Donut & Pastry Shop`,
      city: 'San Francisco',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '1621 Polk St, San Francisco, CA 94109',
      products: 
      [{  name: 'Maple Donut w/ Sprinkles',
          price: 3,
          image: 'https://s3-media4.fl.yelpcdn.com/bphoto/N_awiHnWG0TCR2-v-Q_8lg/o.jpg' },
        { name: 'Crumb Donut',
          price: 3,
          image: 'https://s3-media1.fl.yelpcdn.com/bphoto/Z05V9a-WsAl75KTJfSymDg/348s.jpg'  },
        {  name: 'Giant Donut',
          price: 3,
          image: 'https://s3-media2.fl.yelpcdn.com/bphoto/YcleiTZUFyAKw1Y6TWCcmA/o.jpg' }]
    },

    { name: 'Dynamo Donut & Coffee',
      city: 'San Francisco',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '2760 24th St, San Francisco, CA 94110',
      products: 
      [{  name: 'Maple Glazed Bacon Apple Donut',
          price: 3,
          image: 'https://s3-media4.fl.yelpcdn.com/bphoto/Gy3GBVGdTWKufpjGwLpldw/348s.jpg' },
        { name: 'Apricot Cardamom Donut',
          price: 3,
          image: 'https://s3-media4.fl.yelpcdn.com/bphoto/m3Hn1C-MM-sYd1gT94Oe6g/o.jpg'  },
        {  name: 'Lemon Thyme Donut',
          price: 3,
          image: 'https://s3-media2.fl.yelpcdn.com/bphoto/Olx52wovyUPM50tYgJ4e4Q/o.jpg' }]
    },

    { name: 'District Doughnut and Coffee',
      city: 'Washington, D.C.',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '749 8th St SE, Washington, DC 20003',
      products: 
      [{  name: 'Brown Butter Donut',
          price: 3,
          image: 'https://s3-media4.fl.yelpcdn.com/bphoto/9GNK8pLKc0hzs1H6jD_M4g/ls.jpg' },
        { name: 'Vanilla Bean Glazed Donut',
          price: 3,
          image: 'https://s3-media1.fl.yelpcdn.com/bphoto/iqS-8loCpyZ8KlQ323t8jQ/348s.jpg'  },
        {  name: 'Salted Dulce De Leche Donut',
          price: 3,
          image: 'https://s3-media3.fl.yelpcdn.com/bphoto/UNa_AvUyFJYEn6Q3odvDGA/ls.jpg' }]
    },

    { name: 'Astro Doughnuts & Fried Chicken',
      city: 'Washington, D.C.',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '1308 G St NW, Washington, DC 20005',
      products: 
      [{  name: 'PB&J Donut',
          price: 3,
          image: 'https://s3-media3.fl.yelpcdn.com/bphoto/Lt9e9zftkxjbQVs-FLJVOQ/o.jpg' },
        { name: 'Maple Bacon Donut',
          price: 3,
          image: 'https://s3-media4.fl.yelpcdn.com/bphoto/EoDqhFJkhj1CbheM9FJ1Bg/348s.jpg'  },
        {  name: 'Vanilla Glazed Donut',
          price: 3,
          image: 'https://s3-media4.fl.yelpcdn.com/bphoto/bknYoRQvg_J4-bLXkmLMAg/o.jpg' }]
    },

    { name: 'DC-Donuts',
      city: 'Washington, D.C.',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '225 7th St SE, Washington, DC 20003',
      products: 
      [{  name: 'Maple Bacon Chocolate Donut',
          price: 3,
          image: 'https://s3-media2.fl.yelpcdn.com/bphoto/LvImg4k23YQ3sKInyBXNhg/180s.jpg' },
        { name: 'Blackout Donut',
          price: 3,
          image: 'https://s3-media2.fl.yelpcdn.com/bphoto/XvFSN4eIu_Yq5M5_KCtSeA/o.jpg'  },
        {  name: 'Mini Donuts',
          price: 3,
          image: 'https://s3-media1.fl.yelpcdn.com/bphoto/n-od1acQRV34r4FWFtYkww/348s.jpg' }]
    },

    { name: 'Mighty-O Donuts',
      city: 'Seattle',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '2110 N 55th St, Seattle, WA 98103',
      products: 
      [{  name: 'Nutty French Toast Donut',
          price: 3,
          image: 'https://s3-media2.fl.yelpcdn.com/bphoto/JtWm6ntLuyOGrOgOs_7Grg/o.jpg' },
        { name: 'Don King Donut',
          price: 3,
          image: 'https://s3-media4.fl.yelpcdn.com/bphoto/oqv4mh5YNd6_1E2Mb67SkQ/180s.jpg'  },
        {  name: 'Cocoloco Donut',
          price: 3,
          image: 'https://s3-media2.fl.yelpcdn.com/bphoto/RNbsVqsAoZ_5wgaErDEIRg/o.jpg' }]
    },

    { name: 'Top Pot Doughnuts',
      city: 'Seattle',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '2124 5th Ave, Seattle, WA 98121',
      products: 
      [{  name: 'Pink Feather Boa Donut',
          price: 3,
          image: 'https://s3-media3.fl.yelpcdn.com/bphoto/0iyuisj0zPlXN-04FWX3Jg/o.jpg' },
        { name: 'Raspberry Glazed Cake Donut',
          price: 3,
          image: 'https://s3-media3.fl.yelpcdn.com/bphoto/WGn0lTqs3jQ_Pq_uGN_-WQ/ls.jpg'  },
        {  name: 'Cherry Blossom Cake donut',
          price: 3,
          image: 'https://s3-media3.fl.yelpcdn.com/bphoto/jbDniGSjAg-XEAjRh2X_iw/o.jpg' }]
    },

    { name: 'Daily Dozen Doughnut',
      city: 'Seattle',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: 'Pike Place Market',
      products: 
      [{  name: 'Plain Mini Donuts',
          price: 3,
          image: 'https://s3-media1.fl.yelpcdn.com/bphoto/YQJJrZcOmqWdOhDR1ApMdQ/258s.jpg' },
        { name: 'Cinnamon Mini Donuts',
          price: 3,
          image: 'https://s3-media1.fl.yelpcdn.com/bphoto/hq3lv5Gxm2_x2IR7CYlpCw/258s.jpg'  },
        {  name: 'Powdered Mini Donuts',
          price: 3,
          image: 'https://s3-media4.fl.yelpcdn.com/bphoto/yNCUaWgkckfL2m8ZOQVAwQ/348s.jpg' }]
    },

    { name: 'Federal Donuts',
      city: 'Philadelphia',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '1632 Sansom St, Philadelphia, PA 19103',
      products: 
      [{  name: 'Hot Chocolate Donut',
          price: 3,
          image: 'https://s3-media3.fl.yelpcdn.com/bphoto/TS_wL1WDJaQnomY9PO6GZA/348s.jpg' },
        { name: 'Marshmallow Marshmallow Donut',
          price: 3,
          image: 'https://s3-media3.fl.yelpcdn.com/bphoto/mrKprrwtZ_yrGzTfBqLOng/ls.jpg'  },
        {  name: 'Milk & Coffee Donut',
          price: 3,
          image: 'https://s3-media2.fl.yelpcdn.com/bphoto/dmTkU5s2OaEvaBwfDLi8WQ/348s.jpg' }]
    },

    { name: `Beiler's Bakery`,
      city: 'Philadelphia',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '51 N 12th St, Philadelphia, PA 19107',
      products: 
      [{  name: 'Blueberry Fritter Donut',
          price: 3,
          image: 'https://s3-media1.fl.yelpcdn.com/bphoto/9Qjj8M7gk0jaxYKJzapEzg/348s.jpg' },
        { name: 'Salted Caramel Donut',
          price: 3,
          image: 'https://s3-media1.fl.yelpcdn.com/bphoto/chsmEHkGLZEJNsC0Z5P1QQ/o.jpg'  },
        {  name: 'Oreo Donut',
          price: 3,
          image: 'https://s3-media2.fl.yelpcdn.com/bphoto/cbJfhxTovrMUw99HVMkavw/348s.jpg' }]
    },

    { name: `Dottie's Donuts`,
      city: 'Philadelphia',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '4529 Springfield Ave, Philadelphia, PA 19143',
      products: 
      [{  name: 'Peanut Butter & Oreo Donut',
          price: 3,
          image: 'https://s3-media3.fl.yelpcdn.com/bphoto/_XBvDHW3zZ6e42EIQ6muvA/348s.jpg' },
        { name: 'Pineapple Sugar Donut',
          price: 3,
          image: 'https://s3-media1.fl.yelpcdn.com/bphoto/sTZrti6cCY6ykoZCNAOPaw/ls.jpg'  },
        {  name: 'Cinnamon Bun Donut',
          price: 3,
          image: 'https://s3-media4.fl.yelpcdn.com/bphoto/OgBZeb7Gc5OAMXo4QfUjyg/348s.jpg' }]
    },

    { name: 'Habit Doughnut Dispensary',
      city: 'Denver',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '1553 Platte St, Denver, CO 80202',
      products: 
      [{  name: 'Mocha Donut',
          price: 3,
          image: 'https://s3-media3.fl.yelpcdn.com/bphoto/TaS-qk6G76hU0LZ0IXkcww/o.jpg' },
        { name: 'Habit Donut',
          price: 3,
          image: 'https://s3-media1.fl.yelpcdn.com/bphoto/T7r_rSg3Xf4Day235CEOgg/258s.jpg'  },
        {  name: 'Mexican Chocolate Donut',
          price: 3,
          image: 'https://s3-media4.fl.yelpcdn.com/bphoto/7uk2A38-nhAL3U8emvwEZA/o.jpg' }]
    },

    { name: 'The Donut House',
      city: 'Denver',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '3124 S Parker Rd, Aurora, CO 80014',
      products: 
      [{  name: 'Maple Donut w/ Nuts ',
          price: 3,
          image: 'https://s3-media4.fl.yelpcdn.com/bphoto/U--72QNkqfUtWGyV8-k3gg/o.jpg' },
        { name: 'Strawberry Glazed Sprinkle Donut',
          price: 3,
          image: 'https://s3-media3.fl.yelpcdn.com/bphoto/S7UOG6mhEaf6eRZUGRej8w/o.jpg'  },
        {  name: 'Strawberry & Bavarian Cream Donut',
          price: 3,
          image: 'https://s3-media1.fl.yelpcdn.com/bphoto/90qkWLAUOZlwkBD8ZyJ58A/168s.jpg' }]
    },

    { name: 'Holy Donuts Dot Coffee',
      city: 'Denver',
      image: 'http://i.imgur.com/ZhHVvjD.jpg',
      address: '',
      products: 
      [{  name: 'Samoa Cookie Cake Donut',
          price: 3,
          image: 'https://s3-media1.fl.yelpcdn.com/bphoto/xXemeTtZaBDNyMMKvYNYbQ/o.jpg' },
        { name: 'Maple Bacon Donut',
          price: 3,
          image: 'https://s3-media4.fl.yelpcdn.com/bphoto/GuvbGhi3voJU11P0t5VQRQ/o.jpg'  },
        {  name: 'Lemon Poppyseed Donut',
          price: 3,
          image: 'https://s3-media2.fl.yelpcdn.com/bphoto/YNlfKU7ZOJnlz8KM-aKdkw/o.jpg' }]
    }

  ]).then(res => {
    process.exit();
  });
});