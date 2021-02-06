import express from 'express';
const route = express.Router();

import router from './v1/library-routes/library-mgt.routes';
import userRouter from './v1/user-routes/users.routes';

route.use('/v1/library-management', router);
route.use('/v1/application-users', userRouter);

export default route;
