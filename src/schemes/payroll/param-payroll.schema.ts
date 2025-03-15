import z from 'zod'

const PayrollParamSchema = z.object({
	id: z.string()
})

export type PayrollParamSchemaType = z.infer<typeof PayrollParamSchema>
export default PayrollParamSchema