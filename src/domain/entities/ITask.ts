import { z } from 'zod';


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
    responsible: z.array(z.string()),
    create_at: z.date(),
    update_at: z.date(),
    finish_at: z.date(),
    project: z.array(z.string()),
});

export type TaskStatus = z.infer<typeof taskStatusSchema>;
export type ITask = z.infer<typeof taskSchema>;
