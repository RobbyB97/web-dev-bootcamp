const request = require('request')
const fs = require('fs')

// Get darksky info
const darkSkyKey = () => {return fs.readFileSync('./darkskykey.txt').toString().replace(' ', '')}
const getDSurl = () => {return 'https://api.darksky.net/forecast/' + darkSkyKey() + '/37.8267,-122.4233'}
const darkSkyurl = getDSurl().replace('\n', '')

// Get mapbox info
const mapBoxKey = () => {return fs.readFileSync('./mapboxkey.txt').toString().replace(' ', '')}
const getMBurl = () => {return 'https://api.mapbox.com/geocoding/v5/mapbox.places/North%20Haven.json?access_token=' + mapBoxKey() + '&limit=1'}
const mapBoxurl = getMBurl().replace('\n', '')

request({url: darkSkyurl, json: true}, (error, response) => {
  if (error) {
    console.log('Could not reach DarkSky')
  } else if (response.body.error) {
    console.log('Something went wrong with DarkSky')
  } else {
    const temp = response.body.currently.temperature.toString()
    const rainChance = response.body.currently.precipProbability.toString()
    console.log(response.body.daily.data[0].summary + ' It is currently ' + temp + ' degrees out. There is a ' + rainChance + '% chance of rain.')
  }
})

request({url: mapBoxurl, json: true}, (error, response) => {
  if (error) {
    console.log('Could not reach MapBox')
  } else if (!response.body.features[0]) {
    console.log('Could not find location')
  } else {
    const coordinates = response.body.features[0].geometry['coordinates']
    const latitude = coordinates[1]
    const longitude = coordinates[0]
    console.log('Latitude: ' + latitude + '\nLongitude: ' + longitude)
  }
})
