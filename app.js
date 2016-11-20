const express = require('express');
const app = express();
const path = require('path');
const router = require('./routes');
const bodyParser = require('body-parser');
const volleyball = require('volleyball');
const  nunjucks = require('nunjucks');
// const models = require('./models');

nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(volleyball);

app.use(express.static(path.join(__dirname, '/public')));

app.use(router);

app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  // res.render();
});


app.listen(3000, function() {
  console.log('Listening on port 3000');
})



