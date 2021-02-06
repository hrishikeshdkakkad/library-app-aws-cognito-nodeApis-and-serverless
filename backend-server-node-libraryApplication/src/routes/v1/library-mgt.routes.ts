import { Router } from 'express';

import { EmployeeController } from '../../controllers/library.controller';
import validationMiddleware from '../../middlewares/validation.middleware';

const router = Router();

router.get('/library-management/list', EmployeeController.getAllEmployees);
router.get('/library-management/employee/:id', EmployeeController.getEmployee);
router.get('/library-management/employee/:id/photo', EmployeeController.getEmployeeImage);
router.post('/library-management/employee', validationMiddleware(CreateEmployeeDto, 'body'), isValidDate(), EmployeeController.addEmployee);

export default router;
