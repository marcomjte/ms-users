import { log } from "console"
import { RequestHandler } from "express"
import expressAsyncHandler from "express-async-handler"
import AssistanceSchema, { AssistanceSchemaType } from "../../schemes/assistance/data-assistance.schema"
import storeAssistance from "../../services/assistance/post-assistance.service"
import { JSON } from "../../constants/mime-types.constants"

const postAssistanceHandler: RequestHandler = async (req, res, next) => {
	log('Starting post handler...')

	const { date_check, timein, timeout, user_id } = AssistanceSchema.parse(req.body)

	log(' - date_check', date_check)
	log(' - timein', timein)
	log(' - timeout', timeout)
	log(' - user_id', user_id)
	
	const assistance = await storeAssistance(date_check, timein, timeout, user_id)
	const { id } = assistance
	res.status(201).contentType(JSON).send({ id })
}

export default expressAsyncHandler(postAssistanceHandler)