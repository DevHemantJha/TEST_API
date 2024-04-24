const express = require('express');
const app = express();
const port = 8080;
const OpenApiValidator = require('express-openapi-validator');
const routes = require('./routes/routes');

app.use(express.json());
app.use(routes);
app.use(
  OpenApiValidator.middleware({
    apiSpec: './openapi.yaml',
    validateRequests: true, // (default)
    validateResponses: true, // false by default
  }),
);
app.use((err, req, res, next) => {
  // format error
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});