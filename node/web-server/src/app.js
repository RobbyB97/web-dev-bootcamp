// libraries
const express = require('express')

const app = express()

app.get('', (req, res) => {
  res.send('<h1>CONTENT!</h1>')
})

app.get('/help', (req, res) => {
  res.send('Hello express/help!')
})

app.get('/about', (req, res) => {
  res.send('This is about page!')
})

app.get('/weather', (req, res) => {
  res.send('<head><title>COOL</title></head><body><p>cool</p></body>')
})

app.get('/*', (req, res) => {
  res.send('404 lol')
  console.log('Invalid link...')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000.')
})
