var express = require('express');
var app = express();

app.use('/assets', express.static('assets'));
app.use('/images', express.static('images'));

//var fiveicon = require('serve-favicon');
//app.use(fiveicon(_dirname + '/imagens/fiveicon.png'));


//DEFINE PAGES
app.get('/', function(req, res){
    res.sendFile('/index.html', { root: __dirname  } );
});

app.get('/generic', function(req, res){
    res.sendFile('/generic.html', { root: __dirname  } );
});

app.get('/elements', function(req, res){
    res.sendFile('/generic.html', { root: __dirname  } );
});

var port = process.env.PORT || 3001;
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('my app is listening at http://%s:%s', host, port);
});

/*var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');


function send404(response) {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('Error 404: resource not found');
    response.end();
}


function sendPage(response, filePath, fileContents) {
    response.writeHead(200, {'Content-Type':mime.lookup(path.basename(filePath))});
    response.end(fileContents);
}

function serverWorking(response, absPath) {
    fs.exists(absPath, function(exists){
        if(exists) {
            fs.readFile(absPath, function(err, data) {
                if(err) {
                    send404(response);
                } else {
                    sendPage(response, absPath, data);
                }
            });
        } else {
            send404(response);
        }
    });
}

var server = http.createServer(function(request, response) {
    var filePath = false;

    if(request.url == '/') {
        filePath = 'public/index.html';
    } else {
        filePath = 'public/' + request.url;
    }

    var absPath =  './' + filePath;
    serverWorking(response, absPath);
});

var porta = process.env.PORT || 3001;

server.listen(porta, function(){
    console.log('Servidor rodando na porta: ' + porta);
});
*/
