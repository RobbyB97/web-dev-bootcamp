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
        token: jwt.sign({_id: userOneId}, process.env.JWT_SECRET)
    }]
}

const taskOne = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Task One',
    completed: false,
    user: testUserOne._id
}

const taskTwo = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Task Two',
    completed: true,
    user: testUserOne._id
}

const taskThree = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Task Three',
    completed: false,
    user: testUserTwo._id
}

const setupDatabase = async () => {
    await User.deleteMany() // Delete User collection
    await new User(testUserOne).save()
    await new User(testUserTwo).save()
}

module.exports = {
    userOneId,
    testUserOne,
    setupDatabase
}