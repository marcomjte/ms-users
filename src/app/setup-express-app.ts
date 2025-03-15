import express, { } from "express"
import errorHandler from "../middlewares/error-handler.middleware"
import userRouter from "../routes/user.router"
const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')
import swaggerOptions from '../swagger-options'

const setupExpressApp = () => {
  let { SYSTEM_PORT: port, SYSTEM_VERSION: version } = process.env

  const app = express()

  app.use(express.json())

  const swaggerspec = swaggerJsdoc(swaggerOptions);
  app.use('/' + version + '/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerspec));
  app.use('/' + version + '/', userRouter)
    
  app.use(errorHandler)

  port = port || '3000'
  app.listen(+port, () => {
    console.log(' Server is listen on port: ', port)
  })
}

export default setupExpressApp