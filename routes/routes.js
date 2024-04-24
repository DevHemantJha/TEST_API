const express = require('express');
const router = express.Router();
const { test, test2 } = require('../controllers/dropdownController');
const OpenApiValidator = require('express-openapi-validator');

router.use('/test_Api', OpenApiValidator.middleware({
    apiSpec: './openapi.yaml',
    validateRequests: true, // (default)
    validateResponses: true, // false by default
}),);


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
