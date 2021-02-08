import { Router } from 'express';
import { upload } from '../../../constants';

import { userController } from '../../../controllers/user.controller';
import authMiddleware from '../../../middlewares/auth.middleware';

const userRouter = Router();

const userFormData = upload.fields([{ name: 'username' }]);

userRouter.post('/users', userFormData, userController.createUser);
userRouter.get('/users/cart', authMiddleware, userController.getUserCart);
userRouter.post('/login', userFormData, userController.login);

export default userRouter;
