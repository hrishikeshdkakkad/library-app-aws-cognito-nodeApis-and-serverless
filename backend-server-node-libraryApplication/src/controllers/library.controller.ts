import { NextFunction, Request, Response } from 'express';
import { IBook } from '../interfaces/books.interface';
import { libraryService } from '../services/library.service';
import { s3ops } from '../services/s3.service';
import { convertToBuffer, deleteImageFile } from '../utils/convertToBuffer';

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

  public addBookIntoDatabase = async (req: any, res: any, next: NextFunction) => {
    try {
      const bookDetails = req.body;
      const { filename, mimetype, path } = req.file;
      const imageBuffer = await convertToBuffer(path);
      const s3UploadedFilePath = await s3ops.uploadToS3(imageBuffer, 'book-cover', filename, mimetype);
      bookDetails['image'] = s3UploadedFilePath;
      const addedBook: IBook = await this.library.addBook(bookDetails);
      await deleteImageFile(path);
      res.status(200).json({ addedBook });
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}

export const libraryController = new LibraryController();
