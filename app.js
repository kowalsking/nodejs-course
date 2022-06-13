console.log('Init')

setTimeout(() => {
  console.log(performance.now(), 'Timer o')
}, 10)

setImmediate(() => {
  console.log('Immediate')
})

console.log('Finish')
