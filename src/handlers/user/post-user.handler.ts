import { log } from "console"
import { RequestHandler } from "express"
import expressAsyncHandler from "express-async-handler"
import UserSchema from "../../schemes/user/data-user.schema"
import storeUser from "../../services/user/post-user.service"
import { JSON } from "../../constants/mime-types.constants"

const postUserHandler: RequestHandler = async (req, res, next) => {
  log('Starting post handler...')

  const { name, surname, email, language } = UserSchema.parse(req.body)

  log(' - name', name)
  log(' - surname', surname)
  log(' - email', email)
  log(' - language', language)
  
  const user = await storeUser(name, surname, email, language)
	const { id } = user
  res.status(201).contentType(JSON).send({ id, name, surname, email, language })
}

export default expressAsyncHandler(postUserHandler)