import express from 'express'
import { userRouter } from './users/users.js'

const port = 8080
const app = express()

app.use((req, res, next) => {
  console.log('time', Date.now())
  next()
})

app.get('/hello', (req, res, next) => {
  throw new Error('Error!')
})

app.use('/users', userRouter)

app.use((err, req, res, next) => {
  console.log(err.message)
  res.status(500).send(err.message)
})

app.listen(port, () => {
  console.log('Server listen:', port)
})
