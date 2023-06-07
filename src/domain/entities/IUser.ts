import { z } from 'zod';
const accountTypeSchema = z.enum(['admin', 'user']);

export const userSchema = z.object({
    id: z.string().optional(),
    name: z.string({ required_error: 'Name is required'}).nonempty('name is not empty').min(3, 'Name must be at least 3 characters'),
    avatar_url: z.string().optional(),
    email: z
        .string({ required_error: 'E-mail is required' })
        .email('Invalid email')
        .nonempty('Email is not empty'),
    accountType: accountTypeSchema,
    create_at: z.number().optional(),
    update_at: z.number().optional(),
});

export type AccountType = z.infer<typeof accountTypeSchema>;
export type IUser = z.infer<typeof userSchema>;
