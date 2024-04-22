'use strict';
const express = require('express');
const config = require('./config');
const routes = require('./routes/routes');
const cp = require('cookie-parser');

const app = express();


app.use(cp());
app.use(express.json());

app.use('/', routes);

app.listen(config.port, () => {
  console.log(`Server running at http://localhost:` + config.port);
});
