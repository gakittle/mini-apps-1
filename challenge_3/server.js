let express = require('express');
let morgan = require('morgan');
let bodyParser = require('body-parser');
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
