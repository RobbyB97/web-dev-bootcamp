const express = require('express')
const socketio = require('socket.io')
const Filter = require('bad-words')
const http = require('http')
const path = require('path')

// Utils
const {generateMessage, generateLocationMessage} = require('./utils/messages')
const {addUser, removeUser, getUser, getUsersInRoom} = require('./utils/users')

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
  // New connection system messages
  console.log('New web socket connection')

  // On user joining room
  socket.on('join', ({username, room}, callback) => {
    // Add user to room
    const {error, user} = addUser({id: socket.id, username, room})
    if (error) {
      return callback(error)
    }
    socket.join(user.room)

    // New connection chat messages
    socket.emit('emitMessage',generateMessage('Welcome!'))
    socket.broadcast.to(user.room).emit('emitMessage', generateMessage(`${user.username} has joined!`))

    callback()
  })

  // On sent user message
  socket.on('sendMessage', (message, callback) => {
    // Filter for bad words
    const filter = new Filter()
    if (filter.isProfane(message)) {
      return callback('Bad word...') // callback = error
    }
    // Send message
    io.emit('emitMessage', generateMessage(message))
    callback()  // Empty callback = no error
  })

  // On send location
  socket.on('sendLocation', (userPos, callback) => {
    io.emit('emitLocation', generateLocationMessage(`https://google.com/maps?q=${userPos.latitude},${userPos.longitude}`))
    callback()
  })

  // On user disconnect
  socket.on('disconnect', () => {
    io.emit('message', generateMessage('A user bailed :('))
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
