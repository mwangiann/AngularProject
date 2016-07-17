const http = require('http');

 var express = require('express');
 var app = express();

app.use('/static', express.static('public'));

const PORT = 3000;

 app.get('/', function(req, res) {
     res.sendFile(__dirname + '/index.html');
 });

 app.listen(PORT);
 console.log('App is running on', PORT);