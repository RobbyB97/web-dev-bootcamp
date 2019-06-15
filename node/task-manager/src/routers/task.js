const Task = require('../models/task')
const express = require('express')
const auth = require('../middleware/auth')
const router = new express.Router()


// CRUD tasks
router.post('/tasks', auth, async (req, res) => {    // Create new Task
  const task = new Task({
    ...req.body,
    user: req.user._id
  })

  try {
    await task.save()
    res.status(201).send(task)
  } catch (e) {
    res.status(400).send(e)
  }
})

router.get('/tasks', async (req, res) => {     // Read Tasks collection

  try {
    const tasks = await Task.find({})
    res.send(tasks)
  } catch(e) {
    res.status(500).send()
  }
})

router.get('/tasks/:id', async (req, res) => {   // Find Task by ID
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

router.patch('/tasks/:id', async (req, res) => {   // Update Task by ID
  const updates = Object.keys(req.body)
  const allowedUpdates = ['task', 'completed']
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

  if (!isValidOperation) {
    return res.status(400).send({error: 'Invalid update!'})
  }

  try {
    //const task = await Task.findByIdAndUpdate(req.params.id, {task: req.body.task}, {new: true, runValidators: true})
    const task = await Task.findById(req.params.id)
    updates.forEach((update) => task[update] = req.body[update])
    await task.save()

    if (!task) {
      return res.status(404).send()
    }
    res.send(task)
  } catch(e) {
    res.status(400).send(e)
  }
})

router.delete('/tasks/:id', async (req, res) => {    // Delete Task by ID

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

module.exports = router
