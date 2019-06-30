const request = require('supertest')
const jwt = require('jsonwebtoken')
const app = require('../src/app')
const User = require('../src/models/user')
const Task = require('../src/models/task')
const {userOneId, testUserOne, testUserTwo, setupDatabase} = require('./fixtures/db')

beforeEach(setupDatabase)

// POST /users
test('Should sign up a new user', async () => {
  const response = await request(app)
    .post('/users')
    .send({
      name: 'Robby',
      email: 'test@example.com',
      password: 'passport1'
    })
    .expect(201)

  // Assert database was updated
  const user = await User.findById(response.body.user._id)
  expect(user).not.toBeNull()
  expect(response.body).toMatchObject({
    user: {
      name: 'Robby',
      email: 'test@example.com'
    },
    token: user.tokens[0].token
  })
  expect(user.password).not.toBe('passport1')
})

// POST /users/login
test('Should log in existing user', async () => {
  const newToken = jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
  const response = await request(app)
    .post('/users/login')
    .send({
      email: testUserOne.email,
      password: testUserOne.password,
      tokens: [{
        token: newToken
      }]
    })
    .expect(200)

  const user = await User.findById(response.body.user._id)
  expect(user.tokens[1].token).toBe(newToken)
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

// GET /users/me
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

// DELETE /users/me
test('Should delete account for user', async () => {
  const response = await request(app)
    .delete('/users/me')
    .set('Authorization', `Bearer ${testUserOne.tokens[0].token}`)
    .send()
    .expect(200)

  expect(await User.findById(userOneId)).toBeNull()
})
test('Should not delete account for unauthenticated user', async () => {
  await request(app)
    .delete('/users/me')
    .send()
    .expect(401)
})

// PATCH /users/me
test('Should update user name', async () => {
  const response = await request(app)
    .patch('/users/me')
    .set('Authorization', `Bearer ${testUserOne.tokens[0].token}`)
    .send({
      name: 'Roopert'
    })
    .expect(200)

  const user = await User.findById(userOneId)
  expect(user.name).toBe('Roopert')
})
test('Should not update invalid user field', async () => {
  const response = await request(app)
    .patch('/users/me')
    .set('Authorization', `Bearer ${testUserOne.tokens[0].token}`)
    .send({
      notname: 'Rob'
    })
    .expect(400)
})

// POST /users/me/avatar
test('Should upload avatar image', async () => {
  await request(app)
    .post('/users/me/avatar')
    .set('Authorization', `Bearer ${testUserOne.tokens[0].token}`)
    .attach('avatar', 'tests/fixtures/profile-pic.jpg')
    .expect(200)

  const user = await User.findById(userOneId)
  expect(user.avatar).toEqual(expect.any(Buffer))
})