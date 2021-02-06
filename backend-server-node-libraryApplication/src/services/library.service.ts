import HttpException from '../exceptions/HttpException';
import { IBook } from '../interfaces/books.interface';
import bookModel from '../models/books.model';
import { isEmpty } from '../utils/util';

class LibraryService {
  public book = bookModel;

  async getAllBooks(limit: string, skip: string): Promise<IBook[]> {
    const bookList = await this.book.find({}, '-photo').limit(parseInt(limit)).skip(parseInt(skip));
    return bookList;
  }
}

export const libraryService = new LibraryService();
