//Manage connection to mongodb atlas

//Dependancies
//Mongodb
const MongoClient = require('mongodb').MongoClient;

//My modules
const config = require('./config');

//Connection uri
const uri = 'mongodb+srv://' + config.mongodb.username + ':' + config.mongodb.password + '@' + config.mongodb.domain + '.mongodb.net/test?retryWrites=true&w=majority';

//Database container
const database = {};

//Initialize connection
database.init = callback => {
  //Create the client
  database.client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  
  //Connect to the client
  console.log("connecting to client");
  database.client.connect(err => {
    if(!err){
      callback(false);
    }
    else{
      console.log(uri);
      console.error(err);
      callback("Couldn't connect to mongodb");
    }
  });
};

//Get a collection
database.collection = (db, collection) => database.client.db(db).collection(collection);

//Export the module
module.exports = database;
