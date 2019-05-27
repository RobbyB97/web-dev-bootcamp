const fs = require('fs')
const chalk = require('chalk')



const getNotes = () => {return 'Here\'s ur notes buddee!'}


// command: add
const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find((note) => note.title === title)

  debugger

  if (!duplicateNote) {
    console.log('Okie title checks out bic')
    console.log(duplicateNote)
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
  } else {
    console.log('You alreddy made that silly')
  }
}


// command: remove
const removeNote = title => {
  let notes = loadNotes()
  const notesToKeep = notes.filter((note) => {return note.title !== title})

  if (notesToKeep.length === notes.length) {
    console.log(chalk.red('No note to be removed silly!'))
  } else {
    saveNotes(notesToKeep)
    console.log(chalk.green('Note removed!'))
  }
}


// command: list
const listNotes = () => {
  const notes = loadNotes()
  console.log(chalk.green('Your notes:'))
  notes.forEach((note) => {
    console.log(note.title)
  })
}


// command: read
const readNote = title => {
  const notes = loadNotes()
  const noteToRead = notes.find((note) => {return note.title === title})

  if (noteToRead) {
    console.log(chalk.green('Note found!'))
    console.log(chalk.green(noteToRead.title))
    console.log(chalk.blue(noteToRead.body))
  } else {
    console.log(chalk.red('You w0t m8'))
  }
}


const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}


const loadNotes = () => {
  try {
    const dBuffer = fs.readFileSync('notes.json')
    const dataJSON = dBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    console.log('PLS')
    return []
  }
}


module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}
