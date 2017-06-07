var express = require('express');
var router = express.Router();
var Customer = require('../../models/customer');
var customersCtrl = require('../../controllers/customers');

/*---------- Public Routes ----------*/
router.post('/signup', customersCtrl.signup);
router.post('/login', customersCtrl.login);

module.exports = router;