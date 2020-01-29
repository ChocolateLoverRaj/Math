//Manage connection to mongodb atlas

//Dependancies
//Mongodb
const MongoClient = require('mongodb').MongoClient;

//My modules
const config = require('./config');

//Connection uri
const uri = 'mongodb+srv://' + config.mongodb.user.name + ':<' + config.mongodb.user.password + '>@' + config.mongodb.domain + '.gcp.mongodb.net/test?retryWrites=true&w=majority';

//Client
const client = new MongoClient(uri, { useNewUrlParser: true });

//Database container
const database = {};

//The client
database.client = {};

//Initialize connection
database.init = callback => {
  //Connect to the client
  client.connect((err,client) => {
    if(!err){
      database.client = client;
      callback(false);
    }
    else{
      callback("Couldn't connect to mongodb");
    }
  });
};

//Get a collection
database.collection = (db, collection) => database.client.db(db).collection(collection);

//Export the module
module.exports = database;
