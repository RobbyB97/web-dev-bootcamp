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

const goodbye = (email, name) => {
  sgMail.send({
    to: email,
    from: 'bergersr@my.easternct.edu',
    subject: 'One more thing, before you go.',
    text: `We're sorry to see you leave the task app, ${name}. We would appreciate if you let us know why you decided to leave, so we can improve our service. Thank you for your time.`
  })
}

module.exports = {
  welcome,
  goodbye
}
