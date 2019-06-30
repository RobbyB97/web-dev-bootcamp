const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../../src/models/user')

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

const setupDatabase = async () => {
    await User.deleteMany() // Delete User collection
    await new User(testUserOne).save()
}

module.exports = {
    userOneId,
    testUserOne,
    setupDatabase
}