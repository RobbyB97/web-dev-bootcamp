const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

// Connect to server and routers
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// Run server
app.listen(port, () => {
  console.log('Server is up on port ', port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
  const task = await Task.findById('5d0504177487962608abce38')
  console.log(task.user)
  const user = await User.findById(task.user)
  console.log(user)
}

main()
