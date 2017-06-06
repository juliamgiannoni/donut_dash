function index(req, res) {
  const cities = [
    {name: 'Los Angeles', image: 'http://i.imgur.com/SI2YKlC.jpg'},
    {name: 'Boston', image: 'http://i.imgur.com/Tx9PwL1.jpg'},
    {name: 'Dallas', image: 'http://i.imgur.com/wj83cix.jpg'},
    {name: 'New York', image: 'https://i.imgur.com/L95PhvH.png'},
    {name: 'Chicago', image: 'https://i.imgur.com/L95PhvH.png'},
    {name: 'Portland', image: 'https://i.imgur.com/L95PhvH.png'},
    {name: 'New Orleans', image: 'https://i.imgur.com/L95PhvH.png'},
    {name: 'Washington, D.C.', image: 'https://i.imgur.com/L95PhvH.png'},
    {name: 'San Francisco', image: 'https://i.imgur.com/L95PhvH.png'},
    {name: 'Nashville', image: 'https://i.imgur.com/L95PhvH.png'},
    {name: 'Seattle', image: 'https://i.imgur.com/L95PhvH.png'},
    {name: 'Austin', image: 'https://i.imgur.com/L95PhvH.png'},
    {name: 'Atlanta', image: 'https://i.imgur.com/L95PhvH.png'},
    {name: 'Philadelphia', image: 'https://i.imgur.com/L95PhvH.png'},
    {name: 'Miami', image: 'https://i.imgur.com/L95PhvH.png'}
  ];
  res.json(cities);
}

module.exports = {
  index
};