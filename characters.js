let characters = [
  {
    name: 'Frodo',
    hasRing: false
  },
  {
    name: 'Bilbo',
    hasRing: false
  }
]

function stealRing(characters, owner) {
  return characters.map(c => {
    if (c.name === owner) {
      c.hasRing = true
    } else {
      c.hasRing = false
    }
  })
}

module.exports = {
  characters, 
  stealRing
}
