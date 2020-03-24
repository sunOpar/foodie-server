import { Response, Request } from 'express'
import sql from './mysql'

export default async function menu(req: Request, res: Response) {
  try {
    const data = await sql.query('SELECT * FROM menu')
    res.json(data)
  } catch (error) {
    res.json(error)
  }
}
