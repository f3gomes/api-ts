import { z } from 'zod';

export const userSchema = z.object({
  userNname: z.string().min(2, {}),
  password: z
    .string()
    .min(8, {})
    .regex(/[0-9]/, {})
    .regex(/[a-zA-Z]/, {}),
});
