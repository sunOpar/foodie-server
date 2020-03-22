import http from 'http'
import menu from './menu'
import './mysql'

const hostname = '0.0.0.0'
const port = 8088

const server = http.createServer((req, res) => {
  res.end('hello world')
  if (req.url === '/menu') {
    return menu(req, res)
  }else {
    res.writeHead(404).end()
  }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
