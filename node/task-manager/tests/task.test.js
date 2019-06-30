const request = require('supertest')
const app = require('../src/app')
const Task = require('../src/models/task')
const {userOneId, testUserOne, setupDatabase} = require('./fixtures/db')

beforeEach(setupDatabase)

test('Should create task for user', async () => {
    const response = await request(app)
        .post('/tasks')
        .set('Authorization', `Bearer ${testUserOne.tokens[0].token}`)
        .send({
            task: 'From test'
        })
        .expect(201)
})