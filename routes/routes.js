const express = require('express');
const router = express.Router();
const { test, test2 } = require('../controllers/dropdownController');


router.get('/test', test);

module.exports = router;
