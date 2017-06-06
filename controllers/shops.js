function index(req, res) {
  Shop.find({}, (shops) => {
    res.json(shops);
  });
}

module.exports = {
  index
};