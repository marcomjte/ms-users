import z from 'zod'

const AssistanceSchema = z.object({
  date_check: z.string().date(),
  timein: z.string().time(),
  timeout: z.string().time(),
  user_id: z.number()
})

export type AssistanceSchemaType = z.infer<typeof AssistanceSchema>
export default AssistanceSchema