import { log } from "console"
import { RequestHandler } from "express"
import expressAsyncHandler from "express-async-handler"
import UserSchema from "../../schemes/user/data-user.schema"
import UserParamsSchema from "../../schemes/user/param-user.schema"
import updateUser from "../../services/user/put-user.service"
import { JSON } from "../../constants/mime-types.constants"

const putUserHandler: RequestHandler = async (req, res, next) => {
  log('Starting put handler...')

  const { id } = UserParamsSchema.parse({ id: parseInt(req.params.id) })

  const { name, surname, email, language } = UserSchema.parse(req.body)

  log(' - id ', id)
  log(' - name', name)
  log(' - surname', surname)
  log(' - email', email)
  log(' - language', language)
  
  await updateUser(id, name, surname, email, language)
  res.status(200).contentType(JSON).send()
}

export default expressAsyncHandler(putUserHandler)