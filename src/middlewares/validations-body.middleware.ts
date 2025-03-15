
import { log } from "console";
import { RequestHandler } from "express";
import { ZodArray, ZodEffects, ZodObject } from "zod";

const validationsBodyMiddleware = (schema: ZodObject<any> | ZodEffects<ZodObject<any>> | ZodArray<any>): RequestHandler => {
  return (req, res, next) => {
    log('Validating request body')
    log(' - req.body: ', req.body) 
    try {
      schema.parse(req.body)
      log(' - request body is valid')
      next()
    } catch (error) {
      log(' - request body is invalid')
      log(' - error: ', error)
      next({ error, type: 'ZodError' })
    }
  }
}

export default validationsBodyMiddleware