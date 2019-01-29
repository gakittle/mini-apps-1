let express = require('express');
let morgan = require('morgan');
let parser = require('body-parser');
const port = 8000;

let app = express();

app.use(express.static('./client/index.html'));
app.use(morgan('dev'));
app.use(parser.json());

app.listen(port, err => {
  if (err) {
    return console.error('Error :', err);
  }
  console.log('Listening at Port:', port);
});

app.get('/', (req, res) => {
  console.log('getting:', req.body);
  res.sendFile(__dirname + '/client/index.html');
});

app.post('/', (req, res) => {
  console.log('Incoming request:', req.body);
  res.send('Posting...');
});
