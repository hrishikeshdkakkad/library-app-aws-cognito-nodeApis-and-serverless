import { model, Schema, Document } from 'mongoose';
import { IBook } from '../interfaces/books.interface';

const bookSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const bookModel = model<IBook & Document>('Book', bookSchema);

export default bookModel;
