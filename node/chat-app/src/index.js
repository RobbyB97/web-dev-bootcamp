const express = require('express')
const socketio = require('socket.io')
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
  console.log('New web socket connection')

  io.emit('message', 'Welcome!')

  socket.on('sentMessage', (message) => {
    console.log(`Got ${message} as message`)
    io.emit('emitMessage', message)
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
