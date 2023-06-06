import { db } from "../../infra/firebase/firebase-config";
import { IUser } from "../../shared/entities/IUser";

 class UserRepository{
  async create(user: IUser) {
    const docRef = await db.collection('users').add(user);
    const userWithId = { ...user, id: docRef.id };
    return userWithId;
  }

  async getAll() {
    const snapshot = await db.collection('users').get();
    const users: IUser[] = [];

    snapshot.forEach((doc) => {
      users.push(doc.data() as IUser);
    });
    return users;
  }

}

export const userRepository = new UserRepository();