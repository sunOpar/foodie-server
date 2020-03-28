import { Server } from '@webserverless/fc-express'
import express from 'express'
import menuController from './menu/menu.controller'
import { initDB } from './lib/db'

const app = express()

console.log(process.env.DB_HOST)
app.get('/menu', menuController)

const server = new Server(app)

export const initializer = async (context: any, cb: any) => {
  initDB()
  cb()
}

export const handler = function(req: any, res: any, context: any) {
  server.httpProxy(req, res, context)
}
