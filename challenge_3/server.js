let express = require('express');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let mysql = require('mysql');
const port = 3000;

let app = express();

app.use(express.static('./public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, err => {
  if (err) {
    throw err;
  } else {
    console.log('Listening at Port', port);
  }
});

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'orders'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to database!', err);
    return;
  } else {
    console.log('Listening as ID: ', connection.threadId);
  }
});
