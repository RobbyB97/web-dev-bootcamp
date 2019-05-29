const request = require('request')
const fs = require('fs')
const geocode = require('./utils/mapbox')
const weather = require('./utils/darksky')

const place = geocode('North Haven', (error, data) => {
  if (error) {
    console.log('ERROR: ' + error)
  } else if (data) {
    weather(data['latitude'], data['longitude'], (error, data) => {
      if (error) {
        console.log('ERROR: ' + error)
      } else if (data) {
        console.log(data)
      } else {
        console.log('jeez idk')
      }
    })
  } else {
    console.log('Jeez idk you messed up man')
  }
})
