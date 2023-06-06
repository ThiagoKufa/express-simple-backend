import { IUser } from '../../shared/entities/IUser';
import { ServiceResponse } from '../../shared/service-response';
import { userRepository } from './user-repository';

class UserService {
  async create(user: IUser) {
    try {
      const result = await userRepository.create(user);
      return new ServiceResponse<IUser>(result, 201, null);
    } catch (error) {
      return new ServiceResponse<IUser>(null, 500, 'Erro ao criar usuário.');
    }
  }

  async getAll() {
    try {
      const result = await userRepository.getAll();

      return new ServiceResponse<IUser[]>(result, 200, null);
    } catch (error) {
      return new ServiceResponse<IUser[]>(null, 500, 'Erro ao obter usuários.');
    }
  }
}
export const userService = new UserService();
