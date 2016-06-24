const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(process.env.PORT || port, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});