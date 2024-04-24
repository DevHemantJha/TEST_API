const express = require('express');
const router = express.Router();
const { test, test2 } = require('../controllers/dropdownController');


router.get('/testApi/test1', test);
router.get('/testApi/test2', test2);

module.exports = router;
