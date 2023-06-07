import express from 'express';
import { validateUser } from '../middleware/validate-user';
import { userFactory } from '../../features/user/user-factory';
import { updateValidateUser } from '../middleware/update-validate-user';

const userRouter = express.Router();
const userController = userFactory();

userRouter.get('/', userController.getAll);
userRouter.post('/:user_id', validateUser, userController.create);
userRouter.patch('/:user_id',updateValidateUser, userController.update);

export default userRouter;
