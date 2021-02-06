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
      type: String,
      default: [],
    },
  ],
});

const userModel = model<IUser & Document>('User', userSchema);

export default userModel;