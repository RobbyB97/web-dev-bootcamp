const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../../src/models/user')
const Task = require('../../src/models/task')


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

const userTwoId = new mongoose.Types.ObjectId()
const testUserTwo = {
    _id: userTwoId,
    name: 'Robby',
    email: 'robby@example.com',
    password: 'passeeword1',
    tokens: [{
        token: jwt.sign({_id: userTwoId}, process.env.JWT_SECRET)
    }]
}

const taskOne = {
    _id: new mongoose.Types.ObjectId(),
    task: 'Task One',
    completed: false,
    user: testUserOne._id
}

const taskTwo = {
    _id: new mongoose.Types.ObjectId(),
    task: 'Task Two',
    completed: true,
    user: testUserOne._id
}

const taskThree = {
    _id: new mongoose.Types.ObjectId(),
    task: 'Task Three',
    completed: false,
    user: testUserTwo._id
}

const setupDatabase = async () => {
    await User.deleteMany()
    await Task.deleteMany()
    await new User(testUserOne).save()
    await new User(testUserTwo).save()
    await new Task(taskOne).save()
    await new Task(taskTwo).save()
    await new Task(taskThree).save(

    )
}

module.exports = {
    userOneId,
    userTwoId,
    testUserOne,
    testUserTwo,
    taskOne,
    taskTwo,
    taskThree,
    setupDatabase
}
