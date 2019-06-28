const request = require('supertest')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const app = require('../src/app')
const User = require('../src/models/user')

const userOneId = new mongoose.Types.ObjectId()

const testUserOne = {
  _id: userOneId,
  name: 'Rob',
  email: 'rob@example.com',
  password: 'passeeword1',
  tokens: [{
    token: jwt.sign({_id: userOneId}, process.env.JWT_SECRET)
  }]
}

beforeEach(async () => {
  await User.deleteMany() // Delete User collection
  await new User(testUserOne).save()
})

test('Should sign up a new user', async () => {
  await request(app)
    .post('/users')
    .send({
      name: 'Robby',
      email: 'test@example.com',
      password: 'passport1'
    })
    .expect(201)
})

test('Should log in existing user', async () => {
  await request(app)
    .post('/users/login')
    .send({
      email: testUserOne.email,
      password: testUserOne.password
    })
    .expect(200)
})

test('Should not login nonexistent user', async () => {
  await request(app)
    .post('/users/login')
    .send({
      email: testUserOne.email,
      password: '12345678'
    })
    .expect(400)
})

test('Should get profile for user', async () => {
  await request(app)
    .get('/users/me')
    .set('Authorization', `Bearer ${testUserOne.tokens[0].token}`)
    .send()
    .expect(200)
})

test('Should not get profile for unauthenticated user', async () => {
  await request(app)
  .get('/users/me')
  .send()
  .expect(401)
})