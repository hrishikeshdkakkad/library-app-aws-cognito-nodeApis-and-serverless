import { Router } from 'express';
import { upload } from '../../../constants';

import { libraryController } from '../../../controllers/library.controller';

import authMiddleware from '../../../middlewares/auth.middleware';
import isAdmin from '../../../middlewares/isAdmin.middleware';
import validationMiddleware from '../../../middlewares/validation.middleware';

import { CreateBookDTO } from '../../../dtos/books.dto';

const router = Router();

const booksImage = upload.single('image');
const bookId = upload.fields([{ name: 'bookID' }]);

router.get('/books/list', libraryController.getAllBooks);
router.post('/books/add', authMiddleware, isAdmin, booksImage, libraryController.addBookIntoDatabase);
router.post('/books/add-to-cart', authMiddleware, bookId, libraryController.AddBookToCart);
router.patch('/books/remove-from-cart', authMiddleware, bookId, libraryController.RemoveBookFromUserCart);

export default router;
