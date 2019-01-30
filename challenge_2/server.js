let express = require('express');
let morgan = require('morgan');
let parser = require('body-parser');
let { convertData } = require('./convertData.js');
const port = 8000;

let app = express();

app.use(express.static('./client'));
app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});

app.post('/', (req, res) => {
  var csv = convertData(JSON.parse(req.body.input));
  res.status(201);
  res.type('csv');
  res.send(csv);
});

app.listen(port, err => {
  if (err) {
    return console.error('Error :', err);
  }
  console.log('Listening at Port:', port);
});
