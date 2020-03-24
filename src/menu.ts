import http from 'http'
import sql from './mysql'

export default async function menu(
  req: http.IncomingMessage,
  res: http.ServerResponse,
) {
  try {
    const data = await sql.query('SELECT * FROM menu')
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end(JSON.stringify(data))
    
  } catch (error) {
    res.end(JSON.stringify(error))
  }
}
