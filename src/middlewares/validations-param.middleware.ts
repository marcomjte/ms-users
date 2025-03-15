
import { log } from "console";
import { RequestHandler } from "express";
import { ZodArray, ZodEffects, ZodObject } from "zod";

const validationsParamsMiddleware = (schema: ZodObject<any> | ZodEffects<ZodObject<any>> | ZodArray<any>): RequestHandler => {
  return (req, res, next) => {
    log('Validating request params')
    log(' - req.params: ', req.params)
    try {
      schema.parse(req.params)
      log(' - request params are valid')
      next()
    } catch (error) {
      log(' - request params are invalid')
      next({ error, type: 'ZodError' })
    }
  }
};

export default validationsParamsMiddleware