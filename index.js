//Main file

//Dependancies
//Express
const express = require('express');

//My Modules
const data = require("./lib/database");

var app = express();
var serv = require('http').Server(app);

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
   //Add to visits
   data.collection("records", "stats").findOneAndUpdate({}, {$inc: {visits: 1}}, (err, res) => {
      console.log(err);
   });
});

app.get('/api/stats', (req, res) => {
   res.json({hi: "bye"});
});

//Connect to database
data.init(err => {
   if(!err){
      console.log("Connected to mongodb atlas");
      //Start the server
      serv.listen(process.env.PORT);
      console.log("Server is listening on port " + process.env.PORT);
   }
   else{
      console.error(err);
   }
});
