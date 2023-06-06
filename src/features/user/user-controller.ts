import { Request, Response } from 'express';
import { IUser } from '../../shared/entities/IUser';
import { userService } from './user-service';


export class UserController {

  async create(req: Request, res: Response) {
    const user: IUser = {
      ...req.body,
      update_at: new Date().getTime(),
      create_at: new Date().getTime(),
    };
  
    const result = await userService.create(user);
    res.status(result.code).send(result.data || result.error);
  }

  async getAll(req: Request, res: Response) {
    const result = await userService.getAll();
    res.status(result.code).send(result.data || result.error);
    
  }
}
