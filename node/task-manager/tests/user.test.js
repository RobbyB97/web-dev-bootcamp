const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const testUserOne = {
  name: 'Rob',
  email: 'rob@example.com',
  password: 'passeeword1'
}

beforeEach(async () => {
  await User.deleteMany() // Delete User collection
  await new User(testUserOne).save()
})

test('Should sign up a new user', async () => {
  await request(app).post('/users').send({
    name: 'Robby',
    email: 'bergersr@my.easternct.edu',
    password: 'passport1'
  }).expect(201)
})

test('Should log in existing user', async () => {
  await request(app).post('/users/login').send({
    email: testUserOne.email,
    password: testUserOne.password
  }).expect(200)
})
