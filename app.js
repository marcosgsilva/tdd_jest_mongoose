const express = require('express');
const bodyParser = require('body-parse');
const app = express();
app.use(bodyParser.json());
module.exports = app;
