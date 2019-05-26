const fs = require('fs')


const getNotes = () => {return 'Here\'s ur notes buddee!'}


const addNote = function (title, body) {
  const notes = loadNotes()
  const duplicateNotes = notes.filter(function(note) {
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


const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}


const loadNotes = function () {
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
  addNote: addNote
}
