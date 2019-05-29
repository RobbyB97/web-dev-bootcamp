const request = require('request')
const fs = require('fs')
const geocode = require('./utils/mapbox')
const weather = require('./utils/darksky')

const place = geocode('North Haven', (error, data) => {
  if (error) {
    console.log('ERROR: ' + error)
  } else if (data) {
    console.log(data)
    callback(data)
  } else {
    console.log('Jeez idk you messed up man')
  }
})

console.log(place)

const forecast = weather(place, (error, data) => {
  if (error) {
    console.log('ERROR: ' + error)
  } else if (data) {
    console.log(data)
    callback(data)
  } else {
    console.log('idk man')
  }
})
