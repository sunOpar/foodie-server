import { Response, Request } from 'express'
import sql from '../lib/db'
import { QueryTypes } from 'sequelize'

export default async function menuController(req: Request, res: Response) {
  try {
    const data = await sql.sequelize?.query('SELECT * FROM menu', {
      type: QueryTypes.SELECT,
    })
    res.json(data)
  } catch (error) {
    res.json(error)
  }
}
