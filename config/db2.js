const { MongoClient } = require("mongodb");

const uri ="mongodb+srv://Lorena:12345@adsi2364482.xime1qv.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

const database = client.db('aplicacion');
const coleccion = database.collection('Productos');

    module.exports ={
      client,
      coleccion
    }
    
    

  
