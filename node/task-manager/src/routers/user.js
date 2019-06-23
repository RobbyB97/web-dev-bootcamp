const express = require('express')
const sharp = require('sharp')
const multer = require('multer')

const User = require('../models/user')
const auth = require('../middleware/auth')
const emailer = require('../emails/account')
const router = new express.Router()

const avatars = multer({
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
    emailer.welcome(user.email, user.name)
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
      const uName = req.user.name
      const uEmail = req.user.email
      await req.user.remove()
      emailer.goodbye(uEmail, uName)
      res.send(req.user)
    } catch(e) {
      res.status(500).send()
    }
})

router.get('/users/:id/avatar', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    if (!user || !user.avatar) {
      throw new Error()
    }

    res.set('Content-Type', 'image/png')
    res.send(user.avatar)

  } catch(e) {
    res.status(404).send()
  }
})

router.post('/users/me/avatar', auth, avatars.single('avatar'), async (req, res) => {  // Upload avatar
  const buffer = await sharp(req.file.buffer).resize({width: 250, height: 250}).png().toBuffer()
  req.user.avatar = buffer
  await req.user.save()
  res.send()
}, (error, req, res, next) => {
  res.status(400).send({error: error.message})
})

router.delete('/users/me/avatar', auth, async (req, res) => {  // Delete avatar
  try {
    req.user.avatar = undefined
    await req.user.save()
    res.send()
  } catch(e) {
    res.status(500).send()
  }
})

module.exports = router
