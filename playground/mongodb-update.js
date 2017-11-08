// const MongoClient = require('mongodb').MongoClient;


const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect mongodb server');
  }
  console.log('Connected to Mongodb server')

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("59f796eba63639f225751481")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result)
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("59f7a19733bc14556812a88d")
  }, {
    $set: {
      name: 'iuhu'
    },
    $inc: {
      age: 20
    }
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })

  // db.close();
});
