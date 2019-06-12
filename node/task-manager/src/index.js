const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

// Connect to server and routers
const app = express()
const port = process.env.PORT || 3000

// Maintenance mode
//app.use((req, res, next) => {
//  return res.status(503).send('Site currently in maintenance mode.')
//})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// Run server
app.listen(port, () => {
  console.log('Server is up on port ', port)
})

const jwt = require('jsonwebtoken')

const myFunc = async () => {
  const token = jwt.sign({_id: 'abc123'}, 'thisisasecret', {expiresIn: '7 days'})
  console.log(token)

  const data = jwt.verify(token, 'thisisasecret')
  console.log(data)
}

myFunc()
