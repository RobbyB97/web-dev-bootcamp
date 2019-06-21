const User = require('../models/user')
const express = require('express')
const auth = require('../middleware/auth')
const multer = require('multer')
const router = new express.Router()

const avatars = multer({
  dest: 'avatars',
  limits: {
    fileSize: 1000000
  },
  fileFilter(req, file, cb) { // cb = callback
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
      return cb(new Error('File must be an image'))
    }

    cb(undefined, true)
  }
})


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

router.post('/users/logout', auth, async (req, res) => {    // Logout curr session
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

router.post('/users/logoutAll', auth, async (req, res) => {   // Logout all sessions
  try {
    req.user.tokens = []
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

router.patch('/users/me', auth, async (req, res) => {   // Update User by ID
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'email', 'password', 'age'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

  if (!isValidOperation) {
    return res.status(400).send({error: 'Invalid update!'})
  }

  try {
    updates.forEach((update) => req.user[update] = req.body[update])
    await req.user.save()

    res.send(req.user)
  } catch (e) {
    res.status(400).send(e)
  }
})

router.delete('/users/me', auth, async (req, res) => {    // Delete User by ID

    try {
      await req.user.remove()
      res.send(req.user)
    } catch(e) {
      res.status(500).send()
    }
})

router.post('/users/me/avatar', avatars.single('avatar'), (req, res) => {  // Upload avatar
  res.send()
}, (error, req, res, next) => {
  res.status(400).send({error: error.message})
})

module.exports = router
