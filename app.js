const fs = require('fs')

console.log('Init')

setTimeout(() => {
  console.log(performance.now(), 'Timer o')
}, 10)

setImmediate(() => {
  console.log('Immediate')
})

fs.readFile(__filename, () => {
  console.log('File readed')
})

setTimeout(() => {
  for (let i = 0; i < 1000000000; i++) {

  }
  console.log('DOne!')
}, 0)

Promise.resolve().then(() => {
  console.log('Promise')
})

process.nextTick(() => console.log('tick'))

console.log('Finish')
