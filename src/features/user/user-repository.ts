import { IUser } from '../../domain/entities/IUser';
import { IDatabase } from '../../domain/interfaces/IDatabase';

export class UserRepository {
    database: IDatabase<IUser>;

    constructor(database: IDatabase<IUser>) {
        this.database = database;
    }

    async create(user: IUser, id: string) {
        const docRef = await this.database.create(user, id);
        const userWithId: IUser = { ...user, id: docRef.id };
        return userWithId;
    }

    async getAll() {
        const result = await this.database.getAll();
        return result;
    }

    async update(id: string, data: IUser) {
        const result = await this.database.update(data, id);
        return result;
    }
}
