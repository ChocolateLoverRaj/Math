var express = require('express');
var app = express();
var serv = require('http').Server(app);
var localtunnel = require('localtunnel')

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

localtunnel({ port: process.env.PORT, subdomain: 'chocolatemath' }, function (err, tunnel) {
   console.log(err, tunnel)
})

serv.listen(process.env.PORT);
console.log("Server is listening on port " + process.env.PORT);
