const express = require('express');
const router = express.Router();
const { test, test2 } = require('../controllers/dropdownController');


router.get('/test_Api', function(req, res) {
    res.send("you've reached the API endpoint");
  });


//Testing route
/**
 * @openapi
 * /test_Api/test1:
 *   get:
 *     summary: Testing route
 *     operationId: TestingRoute
 *     responses:
 *       "200":
 *         description: Successful operation
 */
router.get('/test_Api/test1', test);

/**
 * @openapi
 * /test_Api/test2:
 *   get:
 *     summary: Testing route
 *     operationId: TestingRoute
 *     responses:
 *       "200":
 *         description: Successful operation
 */
router.get('/test_Api/test1', test2);

module.exports = router;
