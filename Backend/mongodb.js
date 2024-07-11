const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function databaseConnection(){
  let results = await client.connect()
  let dataBase = results.db("my-portfolio");
  let collection = dataBase.collection('contact-info');
  return collection
}

module.exports = databaseConnection;