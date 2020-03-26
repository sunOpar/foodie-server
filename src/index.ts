import { Server } from '@webserverless/fc-express'
import express from 'express'
import menuController from './menu/menu.controller'

const app = express()

app.get('/menu', menuController)

const server = new Server(app)

export const initializer = async (context: any, cb: any) => {
  console.log('initializer done')
  cb()
}

export const handler = function(req: any, res: any, context: any) {
  server.httpProxy(req, res, context)
}
