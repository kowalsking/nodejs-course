process.on('message', msg => {
  if (msg === 'disconnect') return process.disconnect()

  console.log('Message from fork: ', msg)
  process.send('Pong')
})