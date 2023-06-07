export interface IDatabase<T> {
    collectionName: string;
    create(data: T, id: string): Promise<T>;
    update(data: T, id: string): Promise<T>;
    getOne(id: string): Promise<T>;
    getAll(): Promise<T[]>;
    delete(id: string): Promise<void>;
}
