const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

// Connect to server and routers
const app = express()
const port = process.env.PORT || 3000

const multer = require('multer')
const upload = multer({
  dest: 'images'
})
app.post('/upload', upload.single('upload'), (req, res) => {
  res.send()
})


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
  //const task = await Task.findById('5d0504177487962608abce38')
  //await task.populate('user').execPopulate()
  //console.log(task)

  const user = await User.findById('5d05032329084b2484a89d2f')
  await user.populate('tasks').execPopulate()
  console.log(user.tasks)
}


main()
