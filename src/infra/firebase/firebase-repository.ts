import { DocumentData, WithFieldValue } from 'firebase-admin/firestore';
import { db } from './firebase-config';
import { IDatabase } from '../../domain/interfaces/IDatabase';
export class FirebaseRepository<T extends WithFieldValue<DocumentData>> implements IDatabase<T> {
    collectionName: string;
    constructor(collectionName: string) {
        this.collectionName = collectionName;
    }

    async create(data: T, id: string): Promise<T> {
        await db.collection(this.collectionName).doc(id).create(data);
        const userWithId = { ...data, id };
        return userWithId;
    }

    async update(data: T, id: string): Promise<T> {
        const userExists = await this.getOne(id);
        if (!userExists) {
            throw new Error('User not found');
        }
        await db
            .collection(this.collectionName)
            .doc(id)
            .set({ ...userExists, ...data });
        const dataWithId: T = { ...userExists, ...data, id };
        return dataWithId;
    }

    async getOne(id: string): Promise<T> {
        const result = await db.collection(this.collectionName).doc(id).get();
        return result.data() as T;
    }

    async getAll(): Promise<T[]> {
        const snapshot = await db.collection(this.collectionName).get();
        const users: T[] = [];

        snapshot.forEach(doc => {
            const userWithId: T = { ...(doc.data() as any), id: doc.id };
            users.push(userWithId as T);
        });
        return users;
    }

    async delete(id: string): Promise<void> {
        const result = await db.collection('users').doc(id).delete();
    }
}
