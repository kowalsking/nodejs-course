process.on('message', msg => {
  console.log('Message from fork: ', msg)
  process.send('Pong')
  process.disconnect()
})