//Manage connection to mongodb atlas

//Dependancies
//Mongodb
const MongoClient = require('mongodb').MongoClient;

//My modules
const config = require('./config');

//Connection uri
const uri = 'mongodb+srv://' + config.mongodb.user.name + ':' + config.mongodb.user.password + '@' + config.mongodb.domain + '.mongodb.net/test?retryWrites=true&w=majority';

//Client
const client = new MongoClient(uri, { useNewUrlParser: true });

//Database container
const database = {};

//Initialize connection
database.init = callback => {
  //Connect to the client
  client.connect(err => {
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
database.collection = (db, collection) => client.db(db).collection(collection);

//Export the module
module.exports = database;
