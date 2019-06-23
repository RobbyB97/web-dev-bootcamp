const fs = require('fs')
const sgMail = require('@sendgrid/mail')

// Set API key
const sendgridkey = fs.readFileSync('src/emails/sendgrid2key.txt').toString().replace(' ', '').replace('\n', '')
sgMail.setApiKey(sendgridkey)

sgMail.send({
  to: 'bergersr@my.easternct.edu',
  from: 'bergersr@my.easternct.edu',
  subject: 'This is a test',
  text: 'Please just work'
})
