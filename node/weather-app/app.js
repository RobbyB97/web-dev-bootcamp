const request = require('request')
const fs = require('fs')

// Get darksky info
const darkSkyKey = () => {return fs.readFileSync('./darkskykey.txt').toString().replace(' ', '')}
const geturl = () => {return 'https://api.darksky.net/forecast/' + darkSkyKey() + '/37.8267,-122.4233'}
const darkSkyurl = geturl().replace('\n', '')

// Get mapbox info

request({url: darkSkyurl, json: true}, (error, response) => {
  console.log(response.body.currently)
  let temp = response.body.currently.temperature.toString()
  let rainChance = response.body.currently.precipProbability.toString()
  console.log(response.body.daily.data[0].summary + ' It is currently ' + temp + ' degrees out. There is a ' + rainChance + '% chance of rain.')
})
