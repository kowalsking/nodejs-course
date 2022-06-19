import express from 'express'

const port = 8080
const app = express()

app.all('/hello', (req, res, next) => {
  console.log('all')
  next()
})

const cb = (req, res, next) => {
  console.log('cb')
  next()
}

app.get('/hello', cb, (req, res) => {
  res.send('Hello!')
})

app.listen(port, () => {
  console.log('Server listen:', port)
})
