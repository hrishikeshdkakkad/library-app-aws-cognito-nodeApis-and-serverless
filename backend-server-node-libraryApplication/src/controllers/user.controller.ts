import { NextFunction, Request, Response } from 'express';
import { IUser } from '../interfaces/user.interface';
import { userService } from '../services/users.service';

class UserController {
  public createUser = async (req: Request, res: Response, next: NextFunction) => {
    const { username }: IUser = req.body;
    try {
      console.log(req.body, 'reqBody');
      const createUser = await userService.createUser({ username });
      res.status(201).send({ createUser });
    } catch (error) {
      next(error);
    }
  };
}

export const userController = new UserController();