import { Router } from 'express';
import multer from 'multer';

import { userController } from '../../../controllers/user.controller';

const userRouter = Router();
const upload = multer();

const userFormData = upload.fields([{ name: 'username' }]);

userRouter.post('/users', userFormData, userController.createUser);

export default userRouter;
