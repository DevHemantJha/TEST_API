const express = require('express');
const app = express();
const port = 8080;

const routes = require('./routes/routes');

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});