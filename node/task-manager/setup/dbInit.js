const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const chalk = require('chalk')
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager-api'

console.log(chalk.underline('Connecting to MongoDB database...'))

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log(chalk.red('Unable to connect'))
    }

    console.log(chalk.green('Connected to database...'))
    const db = client.db(databaseName)
    console.log(chalk.yellow('Created', databaseName, 'collection...'))
})