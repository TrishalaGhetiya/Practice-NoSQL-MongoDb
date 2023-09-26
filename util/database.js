// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

// let _db = 1;

//   MongoClient.connect('mongodb+srv://trishalaghetiya:j8dIEdAGv44BxMGi@cluster0.fer7r1e.mongodb.net/?retryWrites=true&w=majority')
//   .then(client => {
//     console.log('connected');
//     _db = client.db("shop");
//     callback();
//   })
//   .catch(err => {
//     console.log(err);
//     //throw err;
//   })


// const getDb = () =>{
//   if(_db){
//     console.log(_db);
//     return _db;
//   }
//   //console.log(err);
//   throw 'No database found';
// }

// //module.exports = mongoConnect;
// module.exports = getDb;

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
require('dotenv').config();

const mongoConnect = (cb) => {
  MongoClient.connect(process.env.MONGO_URL)
    .then((client) => {
      console.log("connected!");
      _db = client.db("shop");
      cb();
    })
    .catch((err) => {
      console.log(err);
    });
};

const getDb = () => {
  if (_db) return _db;
  throw "no database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;