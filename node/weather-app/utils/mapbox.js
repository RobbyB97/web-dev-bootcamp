const fs = require('fs')
const request = require('request')

const geocode = (address, callback) => {

  // Generate url
  const key = fs.readFileSync('./mapboxkey.txt').toString().replace(' ', '')
  let url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=' + key + '&limit=1'
  url = url.replace('\n', '')

  // Request data from mapbox
  request({url: url, json: true}, (error, response) => {
    if (error) {
      callback('Unable to connect to mapbox...', undefined)
    } else if (!response.body.features[0]) {
      callback('Could not find location...', undefined)
    } else {
      const coordinates = response.body.features[0].geometry['coordinates']
      const latitude = coordinates[1]
      const longitude = coordinates[0]
      callback(undefined, {
        latitude: latitude,
        longitude: longitude
      })
    }
  })
}

module.exports = geocode
