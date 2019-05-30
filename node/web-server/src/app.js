// libraries
const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for express config
const publicPage = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Set hbs engine and views path
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Set directory to serve
app.use(express.static(publicPage))

// Homepage
app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Robby'
  })
})

// About page
app.get('/about', (req, res) => {
  res.render('about/index', {
    title: 'The About page',
    name: 'Ribby'
  })
})

// Help page
app.get('/help', (req, res) => {
  res.render('help/index', {
    title: 'The Help page',
    name: 'Ruby',
    message: 'I can\'t help you I need help meself!'
  })
})

// Weather page
app.get('/weather', (req, res) => {
  res.send({
    forecast: 'It is rainy',
    location: 'North Haven'
  })
})

// 404 page
app.get('/*', (req, res) => {
  res.send('404 lol')
  console.log('Invalid link...')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000.')
})
