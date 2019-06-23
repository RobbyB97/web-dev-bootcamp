const fs = require('fs')
const sgMail = require('@sendgrid/mail')

// Set API key
const sendgridkey = fs.readFileSync('src/emails/sendgrid2key.txt').toString().replace(' ', '').replace('\n', '')
sgMail.setApiKey(sendgridkey)

const welcome = (email, name) => {
  sgMail.send({
    to: email,
    from: 'bergersr@my.easternct.edu',
    subject: 'Thanks for joining the task app!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  })
}

module.exports = {
  welcome
}
