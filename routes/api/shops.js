var express = require('express');
var router = express.Router();
var shopsCtrl = require('../../controllers/shops');

/*---------- Protected Routes ----------*/

router.get('/city/:name', shopsCtrl.index);


module.exports = router;