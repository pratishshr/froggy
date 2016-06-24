var express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

var server = app.listen(4000, () => {
  console.log('Server running at port:' + server.address().port);
});