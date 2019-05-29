const request = require('request')
const fs = require('fs')
const geocode = require('./utils/mapbox')
const weather = require('./utils/darksky')

const place = geocode(process.argv[2], (error, geoData) => {
  if (!process.argv[2]) {
    return console.log('Please enter a location.')
  }

  if (error) {
    return console.log(error)
  }

  weather(geoData['latitude'], geoData['longitude'], (error, weatherData) => {
    if (error) {
      return console.log(error)
    }

    console.log(geoData.location)
    console.log(weatherData)
  })
})
