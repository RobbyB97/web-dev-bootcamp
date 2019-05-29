const request = require('request')
const fs = require('fs')
const geocode = require('./utils/mapbox')

// Get darksky info
const darkSkyKey = () => {return fs.readFileSync('./darkskykey.txt').toString().replace(' ', '')}
const getDSurl = () => {return 'https://api.darksky.net/forecast/' + darkSkyKey() + '/37.8267,-122.4233'}
const darkSkyurl = getDSurl().replace('\n', '')

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

geocode('Philadelphia', (error, data) => {
  if (error) {
    console.log('ERROR: ' + error)
  } else if (data) {
    console.log(data)
  } else {
    console.log('Jeez idk you messed up man')
  }
})
