import { z } from 'zod';

export const verifySchema = z.object({
  code: z
    .string({ required_error: 'Code is required' })
    .length(6, 'Verification code must be 6 digits'),
});
