const fs = require('fs')
const request = require('request')

const weather = (coordinates, callback) => {

  // Generate url
  const key = fs.readFileSync('./darkskykey.txt').toString().replace(' ', '')
//  const coords = '/' + coordinates['latitude'] + ',' + coordinates['longitude']
  let url = 'https://api.darksky.net/forecast/' + key + '/37.8267,-122.4233'
  url = url.replace('\n', '')

  // Request data from darksky
  request({url: url, json: true}, (error, response) => {
    if (error) {
      console.log('Could not reach DarkSky')
    } else if (response.body.error) {
      console.log('Something went wrong with DarkSky')
    } else {
      const temp = response.body.currently.temperature.toString()
      const rainChance = response.body.currently.precipProbability.toString()
      const string = response.body.daily.data[0].summary + ' It is currently ' + temp + ' degrees out. There is a ' + rainChance + '% chance of rain.'
      callback(undefined, string)
    }
  })
}

module.exports = weather
