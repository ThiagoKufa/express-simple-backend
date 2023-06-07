import { z } from 'zod';
import { projectSchema } from './IProject';

const accountTypeSchema = z.enum(['admin', 'user']);

export const userSchema = z.object({
  id: z.string().optional(),
  name: z.string({ required_error: 'Name is required' }).nonempty('name is not empty'),
  full_name: z.string().optional(),
  email: z
    .string({ required_error: 'E-mail is required' })
    .email('Invalid email')
    .nonempty('Email is not empty'),
  accountType: accountTypeSchema,
  projects: z.array(projectSchema).optional(),
  create_at: z.number().optional(),
  update_at: z.number().optional(),
});

export type AccountType = z.infer<typeof accountTypeSchema>;
export type IUser = z.infer<typeof userSchema>;
