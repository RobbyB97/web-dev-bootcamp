const express = require('express')
const path = require('path')

// Express config
const publicPage = path.join(__dirname, '../public')
const port = process.env.PORT
const app = express()
app.use(express.static(publicPage))

// Routes
app.get('', (req, res) => {
  res.send('index')
})

// Run server
app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})
