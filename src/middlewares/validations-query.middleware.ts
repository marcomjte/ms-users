
import { log } from "console";
import { RequestHandler } from "express";
import { ZodArray, ZodEffects, ZodObject } from "zod";

const validationsQueryMiddleware = (schema: ZodObject<any> | ZodEffects<ZodObject<any>> | ZodArray<any>): RequestHandler => {
  return (req, res, next) => {
    log('Validating request query')
    log(' - req.query: ', req.query)
    try {
      schema.parse(req.query)
      log(' - request query is valid')
      next()
    } catch (error) {
      log(' - request query is invalid')
      next({ error, type: 'ZodError' })
    }
  }
}

export default validationsQueryMiddleware