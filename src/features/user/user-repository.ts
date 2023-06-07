import { IUser } from '../../domain/entities/IUser';
import { IDatabase } from '../../domain/interfaces/IDatabase';

export class UserRepository {
    database: IDatabase<IUser>;

    constructor(database: IDatabase<IUser>) {
        this.database = database;
    }

    async create(user: IUser) {
        const docRef = await this.database.create(user);
        const userWithId: IUser = { ...user, id: docRef.id };
        return userWithId;
    }

    async getAll() {
        const result = await this.database.getAll();
        return result;
    }
}
