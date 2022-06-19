import express from 'express'
import { userRouter } from './users/users'

const port = 8080
const app = express()

app.all('/hello', (req, res, next) => {
  res.set('Content-Type', 'text/plain')
  res.send('Hello!')
})

app.use('/users', userRouter)

app.listen(port, () => {
  console.log('Server listen:', port)
})
