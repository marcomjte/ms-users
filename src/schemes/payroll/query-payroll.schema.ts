import z from 'zod'

const PayrollQuerySchema = z.object({
	date_init: z.string().date(),
	date_end: z.string().date(),
	fee: z.string()
})

export type PayrollQuerySchemaType = z.infer<typeof PayrollQuerySchema>
export default PayrollQuerySchema