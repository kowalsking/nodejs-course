const { fork } = require('child_process')

const forkProcess = fork('fork.js')

forkProcess.on('message', (msg) => {
  console.log(`Message: ${msg}`)
})

forkProcess.on('exit', statusCode => {
  console.log('Exited: ', statusCode)
})

forkProcess.send('Ping')
forkProcess.send('disconnect')