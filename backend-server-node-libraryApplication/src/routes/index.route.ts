import express from 'express';
const route = express.Router();

import router from './v1/employee.routes';

route.use('/v1', router);

export default route;
