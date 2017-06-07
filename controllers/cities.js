function index(req, res) {
  const cities = [
    {name: 'Los Angeles', image: 'http://blog.hdwallsource.com/wp-content/uploads/2014/11/gradient-26052-26737-hd-wallpapers.jpg.png'},
    {name: 'New York', image: 'http://blog.hdwallsource.com/wp-content/uploads/2014/11/gradient-26052-26737-hd-wallpapers.jpg.png'},
    {name: 'Boston', image: 'http://blog.hdwallsource.com/wp-content/uploads/2014/11/gradient-26052-26737-hd-wallpapers.jpg.png'},
    {name: 'Dallas', image: 'http://blog.hdwallsource.com/wp-content/uploads/2014/11/gradient-26052-26737-hd-wallpapers.jpg.png'},
    {name: 'Nashville', image: 'http://blog.hdwallsource.com/wp-content/uploads/2014/11/gradient-26052-26737-hd-wallpapers.jpg.png'},
    {name: 'Portland', image: 'http://blog.hdwallsource.com/wp-content/uploads/2014/11/gradient-26052-26737-hd-wallpapers.jpg.png'},
    {name: 'Chicago', image: 'http://blog.hdwallsource.com/wp-content/uploads/2014/11/gradient-26052-26737-hd-wallpapers.jpg.png'},
    {name: 'San Francisco', image: 'http://blog.hdwallsource.com/wp-content/uploads/2014/11/gradient-26052-26737-hd-wallpapers.jpg.png'},
    {name: 'Washington, D.C.', image: 'http://blog.hdwallsource.com/wp-content/uploads/2014/11/gradient-26052-26737-hd-wallpapers.jpg.png'},
    {name: 'Seattle', image: 'http://blog.hdwallsource.com/wp-content/uploads/2014/11/gradient-26052-26737-hd-wallpapers.jpg.png'},
    {name: 'Philadelphia', image: 'http://blog.hdwallsource.com/wp-content/uploads/2014/11/gradient-26052-26737-hd-wallpapers.jpg.png'},
    {name: 'Denver', image: 'http://blog.hdwallsource.com/wp-content/uploads/2014/11/gradient-26052-26737-hd-wallpapers.jpg.png'}
  ];
  res.json(cities);
}

module.exports = {
  index
};