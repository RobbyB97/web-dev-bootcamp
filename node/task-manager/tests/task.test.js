const request = require('supertest')
const app = require('../src/app')
const Task = require('../src/models/task')
const {userOneId, testUserOne, testUserTwo, taskOne, setupDatabase} = require('./fixtures/db')

beforeEach(setupDatabase)

// POST /tasks
test('Should create task for user', async () => {
    const response = await request(app)
        .post('/tasks')
        .set('Authorization', `Bearer ${testUserOne.tokens[0].token}`)
        .send({
            task: 'From test'
        })
        .expect(201)

    const task = await(Task.findById(response.body._id))
    expect(task).not.toBeNull()     // Ensure task found
    expect(task.completed).toEqual(false)   // Ensure proper default value
})

// GET /tasks
test('Should return tasks for a user', async () => {
    const response = await request(app)
        .get('/tasks')
        .set('Authorization', `Bearer ${testUserOne.tokens[0].token}`)
        .send()
        .expect(200)
    expect(response.body.length).toBe(2)
})

// DELETE /tasks/:id
test('Shouldn\'t allow user to delete other user\'s task', async () => {
  const taskId = taskOne._id
  const response = await request(app)
    .delete(`/tasks/${taskId}`)
    .set('Authorization', `Bearer ${testUserTwo.tokens[0].token}`)
    .send()
    .expect(404)
})
