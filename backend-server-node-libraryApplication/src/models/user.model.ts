import { model, Schema, Document } from 'mongoose';
import { IUser } from '../interfaces/user.interface';

const userSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
    index: true,
  },
  items: [
    {
      _id: String,
      title: String,
      default: [],
    },
  ],
});

const userModel = model<IUser & Document>('User', userSchema);

export default userModel;
