import { Request, Response, NextFunction } from 'express';
import { userSchema } from '../../domain/entities/IUser';

export function validateUser(req: Request, res: Response, next: NextFunction) {
    const validationResult = userSchema.safeParse(req.body);

    if (!validationResult.success) {
        const errorMessage = validationResult.error.errors[0];
        return res.status(400).json({ error: errorMessage });
    }

    next();
}
