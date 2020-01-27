const notes = [
  // objets
  {
    title: 'vi och cyckel delar',
    body: 'vi behöver köpa muttrar'
  },
  {
    title: 'gympaskor',
    body: 'ledning'
  },
  {
    title: 'xylophon lektioner',
    body: 'ledning'
  }
]

const findNote = function(notes, noteTitle) {
  const index = notes.findIndex(function(note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
  return notes[index]
}

const findNotes = function(notes, query) {
  return notes.filter(function(note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
    return isTitleMatch || isBodyMatch
  })
}
const sortNotes = function(notes) {
  notes.sort(function(a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1
    } else if (b.title.toLowerCase < a.title.toLowerCase()) {
      return 1
    } else {
      return 0
    }
  })
}

console.log(notes)
sortNotes(notes)
console.log(notes)
// const searchIndex = notes.findIndex(function(item, index) {
//   return item.body === 'handhålning'
// })

// console.log(searchIndex)

// //README att tänka på är att det är första argument man kallar på i funktion
// //README inte object direkt.
// const note = findNote(notes, 'Cyckel delar')
// console.log(note)
