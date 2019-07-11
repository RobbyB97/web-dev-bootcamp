const express = require('express')
const socketio = require('socket.io')
const Filter = require('bad-words')
const http = require('http')
const path = require('path')

// Express config
const publicPage = path.join(__dirname, '../public')
const port = process.env.PORT
const app = express()
app.use(express.static(publicPage))

// Socket.io config
const server = http.createServer(app)
const io = socketio(server)

// Routes
app.get('', (req, res) => {
  res.send('index')
})

//let count = 0 // Count connections to server

io.on('connection', (socket) => {
  // New connection messages
  console.log('New web socket connection')
  socket.emit('message', 'Welcome!')
  socket.broadcast.emit('message', 'A new user has joined!')

  socket.on('sendMessage', (message, callback) => {
    console.log(`Got ${message} as message`)
    // Filter for bad words
    const filter = new Filter()
    if (filter.isProfane(message)) {
      return callback('Ooooh you said a bad wooooord!')
    }
    // Send message
    io.emit('emitMessage', message)
    callback('Delivered')
  })

  socket.on('sendLocation', (userPos, callback) => {
    io.emit('message', `https://google.com/maps?q=${userPos.latitude},${userPos.longitude}`)
    callback('Location shared')
  })

  socket.on('disconnect', () => {
    io.emit('message', 'A user bailed :(')
  })
//  socket.emit('countUpdated', count)
//  count += 1

//  socket.on('increment', () => {  // When increment button is clicked
//    count += 145
    // socket = this connection. io = all connections
    // socket.emit('countUpdated', count)
//    io.emit('countUpdated', count)
//  })
})
// Run server
server.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})
