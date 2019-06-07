const express = require('express')
require('./db/mongoose')
const User = require('./models/user.js')
const Task = require('./models/task.js')


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (req, res) => {
  const user = new User(req.body)

  user.save().then(() => {
    res.send(user)
    console.log(user)
  }).catch(() => {
    console.log('Error!')
  })
})

app.listen(port, () => {
  console.log('Server is up on port ', port)
})
