import express from 'express';
import { UserController } from '../../features/user/user-controller';
import { validateUser } from '../middleware/validate-user';

const userRouter = express.Router();
const userController = new UserController();

userRouter.get('/', userController.getAll);
userRouter.post('/', validateUser, userController.create);

export default userRouter;
