import { db } from '../../infra/firebase/firebase-config';
import { FirebaseRepository } from '../../infra/firebase/firebase-repository';
import { IRepository } from '../../shared/IRepository';
import { IUser } from '../../shared/entities/IUser';

class UserRepository {
  private repo: IRepository<IUser> = new FirebaseRepository<IUser>('users');

  async create(user: IUser) {
    const docRef = await this.repo.create(user);
    const userWithId = { ...user, id: docRef.id };
    return userWithId;
  }
  async getAll() {
    const result = await this.repo.getAll();
    return result;
  }
}

export const userRepository = new UserRepository();
