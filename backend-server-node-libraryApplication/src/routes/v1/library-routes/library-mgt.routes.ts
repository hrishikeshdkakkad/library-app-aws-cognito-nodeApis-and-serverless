import { Router } from 'express';

import { libraryController } from '../../../controllers/library.controller';
import authMiddleware from '../../../middlewares/auth.middleware';

const router = Router();

router.get('/books/list', authMiddleware, libraryController.getAllBooks);
// router.post('/library-management/employee', validationMiddleware(CreateEmployeeDto, 'body'), isValidDate(), EmployeeController.addEmployee);

export default router;
