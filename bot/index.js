//dependencies
import express from 'express';
import bodyParser from 'body-parser';

//routes
import facebookRoute from './routes/facebookRoute';
import indexRoute from './routes/indexRoute';
import botRoute from './routes/botRoute';

const app = express();
const port = 4000;

app.use(bodyParser.json());

app.use('/', indexRoute);
app.use('/webhook', facebookRoute);
app.use('/bot', botRoute);

app.listen(process.env.PORT || port, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});