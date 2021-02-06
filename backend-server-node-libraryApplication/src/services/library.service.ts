import HttpException from '../exceptions/HttpException';
import { IBook } from '../interfaces/books.interface';
import bookModel from '../models/books.model';
import { isEmpty } from '../utils/util';

class LibraryService {
  private book = bookModel;

  async getAllBooks(): Promise<IBook[]> {
    const bookList = await this.book.find({});
    return bookList;
  }

  async addBook(book: IBook): Promise<IBook> {
    if (isEmpty(book)) throw new HttpException(400, 'Enter Details in the right format');
    const findBook: IBook = await this.book.findOne({ title: book.title });
    if (findBook) throw new HttpException(409, `Book with ${book.title} already exists`);

    const createdBook: IBook = await this.book.create(book);
    return createdBook;
  }
}

export const libraryService = new LibraryService();
