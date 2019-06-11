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

const bcrypt = require('bcryptjs')

const myFunc = async () => {
  const password = 'red12345!'
  const hashPass = await bcrypt.hash(password, 8)

  console.log(password)
  console.log(hashPass)

  const isMatch = await bcrypt.compare('Red12345!', hashPass)
  console.log(isMatch)
}

myFunc()
