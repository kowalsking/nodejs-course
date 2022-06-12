const { characters, stealRing } = require('./characters.js')

let myChars = characters

myChars = stealRing(myChars, 'Frodo')

for (const c of characters) {
  console.log(c)
}
