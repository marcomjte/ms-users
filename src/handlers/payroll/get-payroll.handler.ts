import { log } from "console"
import { RequestHandler } from "express"
import expressAsyncHandler from "express-async-handler"
import PayrollParamScheme, { PayrollParamSchemaType } from "../../schemes/payroll/param-payroll.schema"
import PayrollQueryScheme, { PayrollQuerySchemaType } from "../../schemes/payroll/query-payroll.schema"
import getPayroll from "../../services/payroll/get-payroll.service"
import { JSON } from "../../constants/mime-types.constants"

const getPayrollHandler: RequestHandler = async (req, res, next) => {
	log('Starting post handler...')

	const { id } = PayrollParamScheme.parse(req.params)
	const { date_init, date_end, fee } = PayrollQueryScheme.parse(req.query)

	log(' - id', id)
	log(' - date_init', date_init)
	log(' - date_end', date_end)
	log(' - fee', fee)
	
	const payroll = await getPayroll(parseInt(id), date_init, date_end, parseFloat(fee))
  res.status(200).contentType(JSON).send(payroll)
}

export default expressAsyncHandler(getPayrollHandler)