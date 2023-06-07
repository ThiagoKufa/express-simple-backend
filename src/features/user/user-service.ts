import { IUser } from '../../domain/entities/IUser';
import { ServiceResponse } from '../../shared/service-response';
import { UserRepository } from './user-repository';

export class UserService {
    repository: UserRepository;

    constructor(repository: UserRepository) {
        this.repository = repository;
    }

    async create(user: IUser, id: string) {
        try {
            const result = await this.repository.create(user, id);
            return new ServiceResponse<IUser>(result, 201, null);
        } catch (error) {
            return new ServiceResponse<IUser>(null, 500, 'Erro ao criar usuário.');
        }
    }

    async getAll() {
        try {
            const result = await this.repository.getAll();
            return new ServiceResponse<IUser[]>(result, 200, null);
        } catch (error) {
            return new ServiceResponse<IUser[]>(null, 500, 'Erro ao obter usuários.');
        }
    }

    async update(id: string, data: IUser) {
        try {
            const result = await this.repository.update(id, data);
            return new ServiceResponse<typeof result>(result, 200, null);
        } catch (error) {
            return new ServiceResponse<IUser[]>(null, 500, 'Erro ao obter usuários.');
        }
    }
}
