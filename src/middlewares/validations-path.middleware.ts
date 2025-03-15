
import { log } from "console";
import { RequestHandler } from "express";
import { ZodArray, ZodEffects, ZodObject } from "zod";

const validationsPathParamsMiddleware = (schema: ZodObject<any> | ZodEffects<ZodObject<any>> | ZodArray<any>): RequestHandler => {
  return (req, res, next) => {
    log('Validating request path params')
    log(' - req.path: ', req.path)
    try {
      schema.parse(req.path)
      log(' - request path params are valid')
      next()
    } catch (error) {
      log(' - request path params are invalid')
      next({ error, type: 'ZodError' })
    }
  }
};

export default validationsPathParamsMiddleware