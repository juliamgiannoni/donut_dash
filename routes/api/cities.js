var express = require('express');
var router = express.Router();
var citiesCtrl = require('../../controllers/cities');

/*---------- Protected Routes ----------*/
router.get('/', citiesCtrl.index);

module.exports = router;