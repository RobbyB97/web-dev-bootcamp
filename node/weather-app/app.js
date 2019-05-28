const request = require('request')
const fs = require('fs')

const getKey = () => {return fs.readFileSync('./secretkey.txt').toString().replace(' ', '')}
const geturl = () => {return 'https://api.darksky.net/forecast/' + getKey() + '/37.8267,-122.4233'}
const url = geturl().replace('\n', '')

request({url: url}, (error, response) => {
  console.log(response)
})
