const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// yargs version
yargs.version('1.100.4325')

// add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function () {
    console.log('Adding new note')
  }
})

// remove command
yargs.command({
  command: 'remove',
  describe: 'Remove an old note',
  handler: function () {
    console.log('Removing old note!')
  }
})

// list command
yargs.command({
  command: 'list',
  describe: 'List notes',
  handler: function () {
    console.log('Listing notes!')
  }
})

// read command
yargs.command({
  command: 'read',
  describe: 'Read notes',
  handler: function () {
    console.log('Reading note!')
  }
})

console.log(yargs.argv)
