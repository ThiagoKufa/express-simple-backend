import { UserService } from './user-service';
import { IUser } from '../../domain/entities/IUser';
import { Request, Response } from 'express';

export class UserController {
    services: UserService;

    constructor(services: UserService) {
        this.services = services;
        this.create = this.create.bind(this);
        this.getAll = this.getAll.bind(this);
        this.update = this.update.bind(this);
    }

    async create(req: Request, res: Response): Promise<void> {
        const id = req.params.user_id;
        const user: IUser = {
            ...(req.body as IUser),
            update_at: new Date().getTime(),
            create_at: new Date().getTime(),
        };

        const result = await this.services.create(user, id);
        res.status(result.code).send(result.data || result.error);
    }

    async getAll(req: Request, res: Response): Promise<void> {
        const result = await this.services.getAll();
        res.status(result.code).send(result.data || result.error);
    }
    
    async update(req: Request, res: Response): Promise<void> {    
        const data: IUser = {
            ...(req.body as IUser),
            update_at: new Date().getTime(),
        };
        const id = req.params.user_id;
        const result = await this.services.update(id, data);
        res.status(result.code).send(result.data || result.error);
    }
}
