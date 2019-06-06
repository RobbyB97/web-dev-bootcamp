const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})

const User = mongoose.model('User', {
  name: {
    type: String
  },
  age: {
    type: Number
  }
})

//const me = new User({
//  name: 'Robby',
//  age: 22
//})
//
//me.save().then((result) => {
//  console.log(me)
//}).catch((error) => {
//  console.log('Error: ', error)
//})

const Task = mongoose.model('Task', {
  task: {
    type: String
  },
  completed: {
    type: Boolean
  }
})

const task = new Task({
  task: 'Do homework!',
  completed: false
})

task.save().then(() => {
  console.log(task)
}).catch((error) => {
  console.log('Error: ', error)
})
