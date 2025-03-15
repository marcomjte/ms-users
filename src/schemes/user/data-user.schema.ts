import z from 'zod';

const UserSchema = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.string().email("Invalid email address"),
  language: z.string()
});

export type UserSchemaType = z.infer<typeof UserSchema>;
export default UserSchema;