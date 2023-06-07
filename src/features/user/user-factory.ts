import { IUser } from '../../domain/entities/IUser';
import { FirebaseRepository } from '../../infra/firebase/firebase-repository';
import { UserController } from './user-controller';
import { UserRepository } from './user-repository';
import { UserService } from './user-service';

export function userFactory() {
    const database = new FirebaseRepository<IUser>('users');
    const repository = new UserRepository(database);
    const service = new UserService(repository);
    const controller = new UserController(service);
    return controller;
}
