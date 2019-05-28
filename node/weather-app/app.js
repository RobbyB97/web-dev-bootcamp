const request = require('request')
const fs = require('fs')

const getKey = () => {return fs.readFileSync('./secretkey.txt').toString()}

console.log(getKey())
