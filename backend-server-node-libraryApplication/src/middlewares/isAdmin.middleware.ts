import { NextFunction, Response, Request } from 'express';
import HttpException from '../exceptions/HttpException';

const isAdmin = async (req: Request, res: Response, next: NextFunction): boolean => {
  const userGroups = res.locals.user['cognito:groups'];
  if (userGroups.includes('admins')) {
    next();
  } else {
    next(new HttpException(401, 'Unauthorized - Not an admin'));
  }
};

export default isAdmin;
