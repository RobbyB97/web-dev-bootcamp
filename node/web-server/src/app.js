// libraries
const path = require('path')
const express = require('express')

const publicPage = path.join(__dirname, '../public')

const app = express()

app.use(express.static(publicPage))

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'It is rainy',
    location: 'North Haven'
  })
})

app.get('/*', (req, res) => {
  res.send('404 lol')
  console.log('Invalid link...')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000.')
})
