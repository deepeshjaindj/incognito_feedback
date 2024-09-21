import { z } from 'zod'

export const signInSchema = z.object({
  identifier: z.string({ required_error: 'Username/Email is required' }),
  password: z.string({ required_error: 'Password is required' }),
});
