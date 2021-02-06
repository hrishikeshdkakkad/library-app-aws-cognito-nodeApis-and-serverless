import { Router } from 'express';

import { libraryController } from '../../controllers/library.controller';
import validationMiddleware from '../../middlewares/validation.middleware';

const router = Router();

router.get('/library-management/books/list', libraryController.getAllBooks);
// router.post('/library-management/employee', validationMiddleware(CreateEmployeeDto, 'body'), isValidDate(), EmployeeController.addEmployee);

export default router;
