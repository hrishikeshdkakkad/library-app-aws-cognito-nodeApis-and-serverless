import { NextFunction, Request, Response } from 'express';
import { IBook } from '../interfaces/books.interface';
import { libraryService } from '../services/library.service';
import { s3ops } from '../services/s3.service';
import { convertToBuffer } from '../utils/convertToBuffer';

class LibraryController {
  library = libraryService;
  public getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const books: IBook[] = await this.library.getAllBooks();
      res.status(200).json({ books });
    } catch (error) {
      next(error);
    }
  };

  public addBookIntoDatabase = async (req: Request, res: Response, next: NextFunction) => {
    const bookDetails = req.body;
    const { filename, mimetype, path } = req.file;

    console.log(req.file, 'zzzz');

    try {
      const imageBuffer = await convertToBuffer(path);
      const s3UploadedFilePath = await s3ops.uploadToS3(imageBuffer, 'book-cover', filename, mimetype);
      bookDetails['image'] = s3UploadedFilePath;
      console.log('Final book details', bookDetails);
      const addedBook: IBook = await this.library.addBook(bookDetails);
      res.status(200).json({ addedBook });
    } catch (error) {
      next(error);
    }
  };
}

export const libraryController = new LibraryController();
