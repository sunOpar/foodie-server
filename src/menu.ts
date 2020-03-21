import http from 'http'
import sql from './mysql'

export default async function menu(
  req: http.IncomingMessage,
  res: http.ServerResponse,
) {
  const data = await sql.query('SELECT * FROM menu')
  console.log(data)
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end(JSON.stringify(data))
}
