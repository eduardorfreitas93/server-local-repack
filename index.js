var path = require('path');
var mime = require('mime');
const express = require('express');
var fs = require('fs');

const app = express();
const port = process.env.PORT ?? 3000;

app.get('/sample/*', function(req, res) {
    var teste = req.originalUrl.split('/');
    var teste2 = teste[teste.length - 1].split('?');

  var file = __dirname + '/files/sample/'+ teste2[0];

  console.log('sample', file)
  
  var filename = path.basename(file);
  var mimetype = mime.getType(file);

  res.setHeader('Content-disposition', 'attachment; filename=' + filename);
  res.setHeader('Content-type', mimetype);

  var filestream = fs.createReadStream(file);
  filestream.pipe(res);
});

app.get('/core/*', function(req, res) {
  var teste = req.originalUrl.split('/');
  var teste2 = teste[teste.length - 1].split('?');

var file = __dirname + '/files/core/'+ teste2[0];

console.log('core', file)

var filename = path.basename(file);
var mimetype = mime.getType(file);

res.setHeader('Content-disposition', 'attachment; filename=' + filename);
res.setHeader('Content-type', mimetype);

var filestream = fs.createReadStream(file);
filestream.pipe(res);
});

app.get('/app1/*', function(req, res) {
  var teste = req.originalUrl.split('/');
  var teste2 = teste[teste.length - 1].split('?');

var file = __dirname + '/files/app1/'+ teste2[0];

console.log('app1', file)

var filename = path.basename(file);
var mimetype = mime.getType(file);

res.setHeader('Content-disposition', 'attachment; filename=' + filename);
res.setHeader('Content-type', mimetype);

var filestream = fs.createReadStream(file);
filestream.pipe(res);
});

app.listen(port, () => {
    console.log(`[CatalogServer] Server listening at port ${port} `);
});