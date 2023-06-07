import { NextFunction, Request, Response } from 'express';

export const updateValidateUser = (req: Request, res: Response, next: NextFunction) => {
  const { email, update_at } = req.body;
  if (email || update_at) {
    return res.status(400).json({ error: 'You can not update email and update_at'});
  }
    next();
};
