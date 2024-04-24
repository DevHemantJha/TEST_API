const express = require('express');
const router = express.Router();
const { test, test2 } = require('../controllers/dropdownController');


router.get('/test_Api', function (req, res) {
    res.send("you've reached the API endpoint");
});
router.get('/test_Api/test1', test);
router.get('/test_Api/test2', test2);

module.exports = router;
