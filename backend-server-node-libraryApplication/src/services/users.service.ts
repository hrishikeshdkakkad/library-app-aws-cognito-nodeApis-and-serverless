import { InitiateAuthResponse } from 'aws-sdk/clients/cognitoidentityserviceprovider';
import { config } from '../config/app.config';
import { cognito } from '../constants';
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

  async getUserCart(user: string): Promise<IUser> {
    if (isEmpty(user)) throw new HttpException(400, 'Enter User details in the right format');

    const foundUser: IUser = await this.user.findOne({ username: user });
    return foundUser;
  }

  async login(username: string, password: string): Promise<InitiateAuthResponse> {
    if (isEmpty(username) || isEmpty(password)) throw new HttpException(400, 'Enter User details in the right format');

    const params = {
      AuthFlow: 'USER_PASSWORD_AUTH',
      ClientId: config.auth.appClient,
      AuthParameters: {
        USERNAME: username,
        PASSWORD: password,
      },
    };

    const auth = await cognito.initiateAuth(params).promise();
    return auth.AuthenticationResult.AccessToken;
  }
}

export const userService = new UserService();
