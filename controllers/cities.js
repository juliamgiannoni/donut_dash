function index(req, res) {
  const cities = [
    {name: 'Los Angeles', image: 'http://i.imgur.com/e05yA4B.png'},
    {name: 'New York', image: 'http://i.imgur.com/8NdPokG.png'},
    {name: 'Boston', image: 'http://i.imgur.com/W23yVkX.png'},
    {name: 'Dallas', image: 'http://i.imgur.com/dDlHl6w.png'},
    {name: 'Nashville', image: 'http://i.imgur.com/AspoiIF.png'},
    {name: 'Portland', image: 'http://i.imgur.com/fwivmbh.png'},
    {name: 'Chicago', image: 'http://i.imgur.com/ndZZ4KE.png'},
    {name: 'San Francisco', image: 'http://i.imgur.com/yPi9KTY.png'},
    {name: 'Washington, D.C.', image: 'http://i.imgur.com/fANqy6X.png'},
    {name: 'Seattle', image: 'http://i.imgur.com/Rmv0H4K.png'},
    {name: 'Philadelphia', image: 'http://i.imgur.com/iTbQfPh.png'},
    {name: 'Denver', image: 'http://i.imgur.com/u3JRMjc.png'}
  ];
  res.json(cities);
}

module.exports = {
  index
};