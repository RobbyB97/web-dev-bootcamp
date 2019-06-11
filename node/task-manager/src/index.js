const express = require('express')
require('./db/mongoose')
const User = require('./models/user.js')
const Task = require('./models/task.js')
const userRouter = require('./routers/user')


// Connect to server and routers
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.use(userRouter)


// CRUD tasks
app.post('/tasks', async (req, res) => {    // Create new Task
  const task = new Task(req.body)

  try {
    await task.save()
    res.status(201).send(task)
  } catch (e) {
    res.status(400).send(e)
  }
})

app.get('/tasks', async (req, res) => {     // Read Tasks collection

  try {
    const tasks = await Task.find({})
    res.send(tasks)
  } catch(e) {
    res.status(500).send()
  }
})

app.get('/tasks/:id', async (req, res) => {   // Find Task by ID
  const _id = req.params.id

  try {
    const task = await Task.findById(_id)
    if (!task) {
      return res.status(404).send()
    }
    res.send(task)
  } catch(e) {
    res.status(500).send()
  }
})

app.patch('/tasks/:id', async (req, res) => {   // Update Task by ID
  const updates = Object.keys(req.body)
  const allowedUpdates = ['task', 'completed']
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

  if (!isValidOperation) {
    return res.status(400).send({error: 'Invalid update!'})
  }

  try {
    const task = await Task.findByIdAndUpdate(req.params.id, {task: req.body.task}, {new: true, runValidators: true})
    if (!task) {
      return res.status(404).send()
    }
    res.send(task)
  } catch(e) {
    res.status(400).send(e)
  }
})

app.delete('/tasks/:id', async (req, res) => {    // Delete Task by ID

  try {
    const task = await Task.findByIdAndDelete(req.params.id)
    if (!task) {
      res.status(404).send()
    }
    res.send(task)
  } catch(e) {
    res.status(500).send()
  }
})


// Run server
app.listen(port, () => {
  console.log('Server is up on port ', port)
})
