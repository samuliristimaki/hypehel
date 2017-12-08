var express = require('express');
var app = express();
var compression = require('compression');
var sslRedirect = require('heroku-ssl-redirect');
app.use(compression());
app.use(sslRedirect());
app.use(express.static('www'));
app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
