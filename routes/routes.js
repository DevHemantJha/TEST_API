const express = require('express');
const router = express.Router();
const { test } = require('../controllers/dropdownController');
const { OpenApiValidator } = require('express-openapi-validator');

// Validate OpenAPI Spec
const validator = OpenApiValidator({
  apiSpec: {
    file: './openapi.yaml',
    validateRequests: true, // (default)
    validateResponses: true, // false by default
  },
});

router.use(async (req, res, next) => {
  try {
    await validator.init();
    await validator.validate(req, res);
    next();
  } catch (err) {
    next(err);
  }
});

// Testing route
router.get('/test', test);

module.exports = router;
