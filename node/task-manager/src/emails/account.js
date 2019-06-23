const fs = require('fs')

const sendgridkey = fs.readFileSync('./sendgridkey.txt').toString().replace(' ', '')
