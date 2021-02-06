import { NextFunction, Request, Response } from 'express';
import { IUser } from '../interfaces/user.interface';
import { userService } from '../services/users.service';

class UserController {
  public createUser = async (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.body;
    try {
      console.log(req.body, 'reqBody');
      const createUser = await userService.createUser({ username });
      res.status(201).send({ createUser });
    } catch (error) {
      next(error);
    }
  };

  public getUserCart = async (req: Request, res: Response, next: NextFunction) => {
    const { username } = res.locals.user;
    try {
      const user: IUser = await userService.getUserCart(username);
      res.status(200).send({ items: user.items, count: user.items.length });
    } catch (error) {
      next(error);
    }
  };
}

export const userController = new UserController();
