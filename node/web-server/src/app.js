// libraries
const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

const publicPage = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicPage))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Robby'
  })
})

app.get('/about', (req, res) => {
  res.render('about/index', {
    title: 'The About page',
    name: 'Ribby'
  })
})

app.get('/help', (req, res) => {
  res.render('help/index', {
    title: 'The Help page',
    name: 'Ruby',
    message: 'I can\'t help you I need help meself!'
  })
})

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
