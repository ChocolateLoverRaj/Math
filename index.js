//Main file

//Dependancies
//Express
const express = require('express');

//My Modules
const data = require("./lib/mongodbhelper");

var app = express();
var serv = require('http').Server(app);

//Count number of times the website was visited
var visits = 0;

app.get('/', function (req, res) {
   visits++;
   console.log("Visits: " + visits);
   res.sendFile( __dirname + "/" + "index.html" );
})

serv.listen(process.env.PORT);
console.log("Server is listening on port " + process.env.PORT);
