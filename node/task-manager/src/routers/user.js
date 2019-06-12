const User = require('../models/user')
const express = require('express')
const auth = require('../middleware/auth')
const router = new express.Router()


// CRUD users
router.post('/users', async (req, res) => {    //Create user
  const user = new User(req.body)

  try {
    await user.save()
    const token = await user.generateAuthToken()
    res.status(201).send({user, token})
  } catch(e) {
    res.status(400).send(e)
  }
})

router.post('/users/login', async (req, res) => {   // Login
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password)
    const token = await user.generateAuthToken()
    res.send({user, token})
  } catch(e) {
    res.status(400).send()
  }
})

router.post('/users/logout', auth, async (req, res) => {    // Logout
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token
    })
    await req.user.save()
    res.send()
  } catch(e) {
    res.status(500).send()
  }
})

router.get('/users', auth, async (req, res) => {     // Read Users collection

  try {
    const users = await User.find({})
    res.send(users)
  } catch(e) {
    res.status(500).send()
  }
})

router.get('/users/me', auth, async (req, res) => {   // Read current user
  try {
    res.send(req.user)
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
    // const user = await User.findByIdAndUpdate(req.params.id, {name: req.body.name}, {new: true, runValidators: true})
    const user = await User.findById(req.params.id)

    updates.forEach((update) => user[update] = req.body[update])
    await user.save()

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
