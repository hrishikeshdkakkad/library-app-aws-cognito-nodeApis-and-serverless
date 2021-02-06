import { model, Schema, Document } from 'mongoose';
import { IBook } from '../interfaces/books.interface';

const bookSchema: Schema = new Schema({
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  ratings: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: string,
    required: true,
    unique: true,
  },
});

const bookModel = model<IBook & Document>('Book', bookSchema);

export default bookModel;
