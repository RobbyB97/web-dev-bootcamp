const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error('You can\'t be negative years old')
      }
      if (value < 18) {
        throw new Error('You must be 18 years or older')
      }
    }
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid email!')
      }
    }
  }
})

const me = new User({
  name: 'Ribster',
  age: 22,
  email: 'bergersr@my.easternct.edu'
})

me.save().then((result) => {
  console.log(me)
}).catch((error) => {
  console.log('Error: ', error)
})

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
