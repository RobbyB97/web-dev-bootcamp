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

io.on('connection', () => {
  console.log('New web socket connection')
})

// Run server
server.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})
