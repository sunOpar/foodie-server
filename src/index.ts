import http from 'http'
import menu from './menu'
import './mysql'

const hostname = '127.0.0.1'
const port = 8080

const server = http.createServer((req, res) => {
  if (req.url === '/menu') {
    return menu(req, res)
  }else {
    res.writeHead(404).end()
  }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
