const request = require('request')
const fs = require('fs')
const geocode = require('./utils/mapbox')
const weather = require('./utils/darksky')

const place = geocode(process.argv[2], (error, {latitude, longitude, location}) => {
  if (!process.argv[2]) {
    return console.log('Please enter a location.')
  }

  if (error) {
    return console.log(error)
  }

  weather(latitude, longitude, (error, weatherData) => {
    if (error) {
      return console.log(error)
    }

    console.log(location)
    console.log(weatherData)
  })
})
