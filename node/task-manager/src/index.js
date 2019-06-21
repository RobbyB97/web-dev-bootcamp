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

// Learn error handling
const multer = require('multer')

const upload = multer({
  dest: 'images',
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(doc|docx)$/)) {
      return cb(new Error('Please upload .doc or .docx'))
    }

    cb(undefined, true)
  }
})

const errorMidware = (req, res, next) => {
  throw new Error('From errorMidware')
}

// testing route
app.post('/upload', upload.single('upload'), (req, res) => {
  res.send()
}, (error, req, res, next) => {
  res.status(400).send({error: error.message})
})

// Run server
app.listen(port, () => {
  console.log('Server is up on port ', port)
})
