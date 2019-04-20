const
  bodyParser = require('body-parser'),
  express = require('express'),
  routes = require('./routes'),
  app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// app.use('/api', routes);

module.exports = app;