import { z } from 'zod';
import { userSchema } from './IUser';
import { projectSchema } from './IProject';

const taskStatusSchema = z.union([
    z.literal('active'),
    z.literal('inactive'),
    z.literal('completed'),
    z.string(),
]);

export const taskSchema = z.object({
    id: z.string().optional(),
    title: z.string(),
    status: taskStatusSchema,
    status_types: z.array(z.string()),
    timeStamps: z.array(z.date()),
    responsible: userSchema,
    create_at: z.date(),
    update_at: z.date(),
    finish_at: z.date(),
    project: projectSchema,
});

export type TaskStatus = z.infer<typeof taskStatusSchema>;
export type ITask = z.infer<typeof taskSchema>;
