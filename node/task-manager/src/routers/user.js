const User = require('../models/user')
const express = require('express')
const router = new express.Router()


// CRUD users
router.post('/users', async (req, res) => {    //Create user
  const user = new User(req.body)

  try {
    await user.save()
    res.status(201).send(user)
  } catch(e) {
    res.status(400).send(e)
  }
})

router.get('/users', async (req, res) => {     // Read Users collection

  try {
    const users = await User.find({})
    res.send(users)
  } catch(e) {
    res.status(500).send()
  }
})

router.get('/users/:id', async (req, res) => {   // Find User by ID
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

router.patch('/users/:id', async (req, res) => {   // Update User by ID
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

router.delete('/users/:id', async (req, res) => {    // Delete User by ID

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

module.exports = router
