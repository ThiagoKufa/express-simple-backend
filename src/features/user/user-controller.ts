import { UserService } from './user-service';
import { IUser } from '../../domain/entities/IUser';
import { Request, Response } from 'express';

export class UserController {
    services: UserService;

    constructor(services: UserService) {
        this.services = services;
        this.create = this.create.bind(this);
        this.getAll = this.getAll.bind(this);
    }

    async create(req: Request, res: Response): Promise<void> {
        const user: IUser = {
            ...(req.body as IUser),
            update_at: new Date().getTime(),
            create_at: new Date().getTime(),
        };

        const result = await this.services.create(user);
        res.status(result.code).send(result.data || result.error);
    }

    async getAll(req: Request, res: Response): Promise<void> {
        console.log(this);
        const result = await this.services.getAll();
        res.status(result.code).send(result.data || result.error);
    }
}
