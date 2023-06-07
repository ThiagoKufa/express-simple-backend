import express from 'express';
import { validateUser } from '../middleware/validate-user';
import { userFactory } from '../../features/user/user-factory';

const userRouter = express.Router();
const userController = userFactory();

userRouter.get('/', userController.getAll);
userRouter.post('/', validateUser, userController.create);

export default userRouter;
