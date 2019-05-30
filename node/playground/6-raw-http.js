const https = require('https')
const url = 'https://www.google.com'

const request = https.request(url, (response) => {
  let data = ''

  response.on('data', (chunk) => {
    console.log(chunk.toString() + '\n\n\n\n')
  })

  response.on('end', () => {})


})

request.end()
