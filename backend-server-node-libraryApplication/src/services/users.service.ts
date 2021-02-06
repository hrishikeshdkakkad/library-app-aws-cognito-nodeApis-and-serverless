import HttpException from '../exceptions/HttpException';
import { IUser } from '../interfaces/user.interface';
import userModel from '../models/user.model';
import { isEmpty } from '../utils/util';

class UserService {
  public user = userModel;

  async createUser(user: IUser): Promise<IUser> {
    if (isEmpty(user)) throw new HttpException(400, 'Enter User details in the right format');

    const findUser: IUser = await this.user.findOne({ username: user.username });
    if (findUser) throw new HttpException(409, `User with ${user.username} already exists`);

    const createdUser: IUser = await this.user.create(user);
    return createdUser;
  }
}

export const userService = new UserService();
