import { ZodType, z } from 'zod';
import { taskSchema } from './ITask';
import { userSchema } from './IUser';

const projectStatusSchema = z.enum(['active', 'inactive']);

export const projectSchema: ZodType = z.object({
    id: z.string().optional(),
    title: z.string(),
    status: projectStatusSchema,
    tasks: z.array(taskSchema),
    participants: z.array(userSchema),
    created_at: z.date(),
    updated_at: z.date(),
});

export type ProjectStatus = z.infer<typeof projectStatusSchema>;
export type IProject = z.infer<typeof projectSchema>;
