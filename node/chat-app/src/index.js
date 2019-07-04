const express = require('express')
const http = require('http')
const path = require('path')

// Express config
const publicPage = path.join(__dirname, '../public')
const port = process.env.PORT
const app = express()
app.use(express.static(publicPage))
const server = http.createServer(app)

// Routes
app.get('', (req, res) => {
  res.send('index')
})

// Run server
server.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})
