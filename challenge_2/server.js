var express = require('express');
const port = 8000;

var app = express();

app.use(express.static(__dirname));
app.listen(port, err => {
  if (err) {
    console.error('Error :', err);
  } else {
    console.log('Listening at Port:', port);
  }
});
