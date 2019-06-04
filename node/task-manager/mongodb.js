// CRUD operations with MongoDB


const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
  if (error) {
    return console.log('Couldn\'t connect to database')
  }

  const db = client.db(databaseName)

  //db.collection('users').insertOne({
  //  name: 'Robby',
  //  age: 22
  //}, (error, result) => {
  //  if (error) {
  //    return console.log('Unable to insert user')
  //  }
  //console.log(result.ops)

  //db.collection('users').insertMany([
  //  {
  //    name: 'Jim',
  //    age: 40
  //  }, {
  //    name: 'Luther',
  //    age: 780
  //  }
  //], (error, result) => {
  //  if (error) {
  //    return console.log('Couldn\'t insert documents')
  //  }
  //  console.log(result.ops)
  //})

  db.collection('tasks').insertMany([
    {
      task: 'Wake up',
      completed: false
    }, {
      task: 'Grab a brush',
      completed: false
    }, {
      task: 'Put on a little makeup',
      completed: false
    }
  ], (error, result) => {
    if (error) {
      return console.log('Couldn\'t store tasks')
    }
    console.log(result.ops)
  })

})
