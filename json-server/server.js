var express = require('express'),
  app = express(),
  port = process.env.PORT || 1111,
  bodyParser = require('body-parser');
  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/profileRoutes');
routes(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});