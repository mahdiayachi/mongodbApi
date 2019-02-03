const express  = require('express');
let app = express();
let mongoose = require('mongoose');
const port = process.env.PORT || 3000;
require('./model/StoreModel');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8100");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

let routes = require('./routes/StoreRoutes');

mongoose.connect('mongodb://127.0.0.1:27017/stores_db', { useNewUrlParser: true });
mongoose.set('debug', true);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);
// 404 not found
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);