import { z } from "zod";

export const signUpSchema = z.object({
  username: z
    .string({ required_error: 'Username is required' })
    .min(2, 'Username must be at least 2 characters long')
    .max(255, 'Username can not be more than 255 characters')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username must not contain special characters'),
  email: z
    .string({ required_error: 'Email is required' })
    .email('Email must be valid'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(6, 'Password must be at least 6 characters long')
});
