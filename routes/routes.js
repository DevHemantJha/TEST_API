const express = require('express');
const router = express.Router();
const { test, test2 } = require('../controllers/dropdownController');

//Testing route
/**
 * @openapi
 * /test:
 *   get:
 *     summary: Testing route
 *     operationId: TestingRoute
 *     responses:
 *       "200":
 *         description: Successful operation
 */
router.get('/test', test);

/**
 * @openapi
 * /test2:
 *   get:
 *     summary: Testing route
 *     operationId: TestingRoute
 *     responses:
 *       "200":
 *         description: Successful operation
 */
router.get('/test2', test2);

module.exports = router;

