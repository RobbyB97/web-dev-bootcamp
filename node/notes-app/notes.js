const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {return 'Here\'s ur notes buddee!'}


const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title
  })

  if (duplicateNotes.length === 0) {
    console.log('Okie title checks out bic')
    saveNotes(notes)
  } else {
    console.log('You alreddy made that silly')
  }

  notes.push({
    title: title,
    body: body
  })
}


const removeNote = title => {
  let notes = loadNotes()
  const notesToKeep = notes.filter(function (note) {
    return note.title !== title
  })

  if (notesToKeep.length === notes.length) {
    console.log(chalk.red('No note to be removed silly!'))
  } else {
    saveNotes(notesToKeep)
    console.log(chalk.green('Note removed!'))  
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
  removeNote: removeNote
}
