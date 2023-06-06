import { Request, Response, NextFunction } from 'express';

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  if (err instanceof SyntaxError && err.message.includes('JSON')) {
    return res.status(400).json({ error: 'JSON inválido' });
  }

  next(err);
}
