// CRUD operations with MongoDB

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id.id.length)
console.log(id.toHexString().length)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
  if (error) {
    return console.log('Couldn\'t connect to database')
  }

  const db = client.db(databaseName)

  // List all collections since Robo 3T doesn't work well on linux
  db.collection('tasks').find({}).toArray((error, tasks) => {
    console.log('Tasks:')
    console.log(tasks)
  })
  db.collection('users').find({}).toArray((error, users) => {
    console.log('Users:')
    console.log(users)
  })
  db.collection('users').insertOne({
    name: 'Robo Ribby',
    age: 80
  }).then((result) => {
    console.log('Success')
  }).catch((error) => {
    console.log('Oh no :(')
  })

//  db.collection('users').updateOne({
//    _id: new ObjectID('5cf6c08f1e968d6fe62df761')
//  }, {
//    $set: {
//      name: 'Zeke'
//    },
    //$inc: {
    //  age: 2
    //}
//  }).then((result) => {
//    console.log('Success')
//  }).catch((error) => {
//    console.log('Error')
//  })
//  db.collection('tasks').updateMany({
//    completed: true
//  }, {
//    $set: {
//      completed: false
//    }
//  }).then((result) => {
//    console.log(result.modifiedCount)
//  }).catch((error) => {
//    console.log('Error!')
//  })

  db.collection('tasks').deleteOne({
    task: 'Wake up'
  }).then((result) => {
    console.log('Delete success')
  }).catch((error) => {
    console.log('Delete error')
  })
})
