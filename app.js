const EventEmitter = require('events')

const myEmitter = new EventEmitter()

const logDbConnection = () => {
  console.log('DB connected')
}

myEmitter.addListener('connected', logDbConnection)

myEmitter.emit('connected')

// myEmitter.removeListener('connected', logDbConnection)
// myEmitter.off('connected', logDbConnection)
// myEmitter.removeAllListener('connected')

myEmitter.emit('connected')

myEmitter.on('msg', data => {
  console.log('Taked:', data)
})

myEmitter.emit('msg', 'Hello world!')

myEmitter.once('off', () => {
  console.log('1123123')
})

myEmitter.emit('off')
myEmitter.emit('off')

console.log(myEmitter.getMaxListeners())
myEmitter.setMaxListeners(1)
console.log(myEmitter.getMaxListeners())

console.log(myEmitter.listenerCount('msg'))
console.log(myEmitter.listenerCount('off'))
console.log(myEmitter.eventNames())

myEmitter.on('error', err => {
  console.log(`Error: ${err.message}`)
})

myEmitter.emit('error', new Error('EEEERRRROOOORRRR'))
