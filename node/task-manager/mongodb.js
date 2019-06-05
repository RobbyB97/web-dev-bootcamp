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

  db.collection('tasks').find({}).toArray((error, tasks) => {
    console.log(tasks)
  })
})
