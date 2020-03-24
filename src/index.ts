import {Server} from '@webserverless/fc-express'
import express from 'express'
import menu from './menu'

const app = express()

app.get('/menu', menu)

const server = new Server(app)

export const handler = function(req: any, res: any, context: any) {
  server.httpProxy(req, res, context)
}
