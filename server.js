var express = require('express');
var app = express();
var connection = require('./app/config/database.js');
var fotoRoute = require('./app/routes/fotoRoute');

//conexão com banco
var uri = process.env.MONGODB_URI || 'mongodb://localhost/fotoapp';
connection.connect(uri);

app.use('/assets', express.static('assets'));
app.use('/images', express.static('images'));

//var fiveicon = require('serve-favicon');
//app.use(fiveicon(_dirname + '/imagens/fiveicon.png'));


//DEFINE PAGES
app.get('/', function(req, res) {
    res.sendFile('/index.html', { root: __dirname  } );
});

fotoRoute(app);

var port = process.env.PORT || 3001;
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('my app is listening at http://%s:%s', host, port);
});
