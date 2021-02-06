import { Router } from 'express';
import { upload } from '../../../constants';

import { libraryController } from '../../../controllers/library.controller';

import authMiddleware from '../../../middlewares/auth.middleware';
import isAdmin from '../../../middlewares/isAdmin.middleware';
import validationMiddleware from '../../../middlewares/validation.middleware';

import CreateBookDTO from '../../../dtos/books.dto';

const router = Router();

const booksImage = upload.single('image');

router.get('/books/list', libraryController.getAllBooks);
router.post('/books/add', authMiddleware, isAdmin, validationMiddleware(CreateBookDTO, 'body'), booksImage, libraryController.addBookIntoDatabase);
// router.post('/library-management/employee', validationMiddleware(CreateEmployeeDto, 'body'), isValidDate(), EmployeeController.addEmployee);

export default router;
