const EventEmitter = require('events')

const myEmitter = new EventEmitter()

const logDbConnection = () => {
  console.log('DB connected')
}

myEmitter.addListener('connected', logDbConnection)

myEmitter.emit('connected')

myEmitter.removeListener('connected', logDbConnection)
// myEmitter.off('connected', logDbConnection)
// myEmitter.removeAllListener('connected')

myEmitter.emit('connected')
