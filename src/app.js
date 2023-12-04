import express from 'express'
import routes from './routes'
import { resolve } from 'path'
import './database'
import cors from 'cors'

const corsOptions = {
  origin: 'http://code-burguer-interface-gustahideki.vercel.app',
  Credentials: true,
}

class App {
  constructor() {
    this.app = express()
    this.app.use(cors(corsOptions))
    this.midlewares()
    this.routes()
  }

  midlewares() {
    this.app.use(express.json())
    this.app.use(
      '/product-file',
      express.static(resolve(__dirname, '..', 'uploads')),
    )
    this.app.use(
      '/category-file',
      express.static(resolve(__dirname, '..', 'uploads')),
    )
  }

  routes() {
    this.app.use(routes)
  }
}

export default new App().app
