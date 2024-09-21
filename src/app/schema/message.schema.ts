import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string({ required_error: 'Message is required' })
    .min(10, 'Message must be at least 10 characters long')
    .max(1000, 'Message can not be more than 1000 characters long')
})
