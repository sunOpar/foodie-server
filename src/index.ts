import express from 'express'
import menu from './menu'
import './mysql'

const app = express()
const port = 8088

app.get('/menu', menu)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
