var express = require('express');
var parser = require('body-parser');
var morgan = require('morgan');
const port = 3000;

var app = express();

app.use(express.static('./client/dist'));
app.use(morgan('dev'));
app.use(parser.json());

app.listen(port, err => {
  if (err) {
    throw err;
  } else {
    console.log('Listening at Port:', port);
  }
});
