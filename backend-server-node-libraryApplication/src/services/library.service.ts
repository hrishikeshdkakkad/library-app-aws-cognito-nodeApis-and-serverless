import HttpException from '../exceptions/HttpException';
import { IBook } from '../interfaces/books.interface';
import bookModel from '../models/books.model';
import userModel from '../models/user.model';
import { isEmpty } from '../utils/util';

class LibraryService {
  private book = bookModel;
  private user = userModel;

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

  async addBookToCart(bookId: string, userName: string): Promise<IBook> {
    if (isEmpty(bookId) || isEmpty(userName)) throw new HttpException(400, 'Enter Details in the right format');
    const findBook: IBook = await this.book.findOne({ _id: bookId });
    if (!findBook) throw new HttpException(409, `Book with ${bookId} does not exists`);

    const updatedUser = await this.user.updateOne({ username: userName }, { $push: { items: { _id: findBook._id, title: findBook.title } } });

    return updatedUser;
  }

  async removeBookFromCart(bookId: string, userName: string): Promise<IBook> {
    if (isEmpty(bookId) || isEmpty(userName)) throw new HttpException(400, 'Enter Details in the right format');

    const updatedUser = await this.user.updateOne({ username: userName }, { $pull: { items: { _id: bookId } } });

    return updatedUser;
  }
}

export const libraryService = new LibraryService();
