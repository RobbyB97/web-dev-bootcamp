const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// yargs version
yargs.version('1.100.4325')

// add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => { notes.addNote(title=argv.title, body=argv.body) }
})

// remove command
yargs.command({
  command: 'remove',
  describe: 'Remove an old note',
  builder: {
    title: {
      describe: 'Title of note to be removed',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => { notes.removeNote(title=argv.title) }
})

// list command
yargs.command({
  command: 'list',
  describe: 'List notes',
  handler: () => { console.log('Listing notes!') }
})

// read command
yargs.command({
  command: 'read',
  describe: 'Read notes',
  handler: () => { console.log('Reading note!') }
})

let unneeded = yargs.argv
