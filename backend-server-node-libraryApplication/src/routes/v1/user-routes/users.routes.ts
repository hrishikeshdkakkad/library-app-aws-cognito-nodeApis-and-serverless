import { Router } from 'express';
import { upload } from '../../../constants';

import { userController } from '../../../controllers/user.controller';

const userRouter = Router();

const userFormData = upload.fields([{ name: 'username' }]);

userRouter.post('/users', userFormData, userController.createUser);

export default userRouter;
