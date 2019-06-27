const request = require('supertest')
const app = require('../src/app')

test('Should sign up a new user', async () => {
  await request(app).post('/users').send({
    name: 'Robby',
    email: 'bergersr@my.easternct.edu',
    password: 'passport1'
  }).expect(201)
})
