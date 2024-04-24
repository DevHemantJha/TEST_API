const express = require('express');
const router = express.Router();
const { test, test2 } = require('../controllers/dropdownController');


router.get('/test', test);
router.get('/test/test2', test2);

module.exports = router;
