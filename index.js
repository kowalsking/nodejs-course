import express from 'express'

const port = 8080
const app = express()

app.all('/hello', (req, res, next) => {
  console.log('all')
  next()
})

app.get('/hello', (req, res) => {
  res.send('Hello!')
})

app.listen(port, () => {
  console.log('Server listen:', port)
})
