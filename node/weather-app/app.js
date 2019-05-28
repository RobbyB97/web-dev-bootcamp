const request = require('request')
const fs = require('fs')

// Get darksky info
const darkSkyKey = () => {return fs.readFileSync('./darkskykey.txt').toString().replace(' ', '')}
const getDSurl = () => {return 'https://api.darksky.net/forecast/' + darkSkyKey() + '/37.8267,-122.4233'}
const darkSkyurl = getDSurl().replace('\n', '')

// Get mapbox info
const mapBoxKey = () => {return fs.readFileSync('./mapboxkey.txt').toString().replace(' ', '')}
const getMBurl = () => {return 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=' + mapBoxKey() + '&limit=1'}
const mapBoxurl = getMBurl().replace('\n', '')

//request({url: darkSkyurl, json: true}, (error, response) => {
//  console.log(response.body.currently)
//  let temp = response.body.currently.temperature.toString()
//  let rainChance = response.body.currently.precipProbability.toString()
//  console.log(response.body.daily.data[0].summary + ' It is currently ' + temp + ' degrees out. There is a ' + rainChance + '% chance of rain.')
//})
request({url: mapBoxurl, json: true}, (error, response) => {
  console.log(response.body.features[0].geometry['coordinates'])
})
