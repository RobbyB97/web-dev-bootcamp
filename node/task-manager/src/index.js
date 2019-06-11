const express = require('express')
require('./db/mongoose')
const User = require('./models/user.js')
const Task = require('./models/task.js')


// Connect to server
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())


// CRUD users
app.post('/users', async (req, res) => {    //Create user
  const user = new User(req.body)

  try {
    await user.save()
    res.status(201).send(user)
  } catch(e) {
    res.status(400).send(e)
  }
})

app.get('/users', async (req, res) => {     // Read Users collection

  try {
    const users = await User.find({})
    res.send(users)
  } catch(e) {
    res.status(500).send()
  }
})

app.get('/users/:id', async (req, res) => {   // Find User by ID
  const _id = req.params.id

  try {
    const user = await User.findById(_id)
    if (!user) {
      return res.status(404).send()
    }
    res.send(user)
  } catch(e) {
    res.status(500).send()
  }
})

app.patch('/users/:id', async (req, res) => {   // Update User by ID
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'email', 'password', 'age'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

  if (!isValidOperation) {
    return res.status(400).send({error: 'Invalid update!'})
  }

  try {
    const user = await User.findByIdAndUpdate(req.params.id, {name: req.body.name}, {new: true, runValidators: true})
    if (!user) {
      return res.status(404).send()
    }
    res.send(user)
  } catch (e) {
    res.status(400).send(e)
  }
})

app.delete('/users/:id', async (req, res) => {    // Delete User by ID

    try {
      const user = await User.findByIdAndDelete(req.params.id)
      if (!user) {
        return res.status(404).send()
      }
      res.send(user)
    } catch(e) {
      res.status(500).send()
    }
})


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
