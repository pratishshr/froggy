const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

const server = app.listen(4000, () => {
  console.log('Server running at port:' + server.address().port);
});