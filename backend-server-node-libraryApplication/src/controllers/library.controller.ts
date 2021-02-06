import { NextFunction, Request, Response } from 'express';
import { libraryService } from '../services/library.service';

class LibraryController {
  public getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
    // try {
    //   const findAllUsersData: User[] = await this.userService.findAllUser();
    //   res.status(200).json({ data: findAllUsersData, message: 'findAll' });
    // } catch (error) {
    //   next(error);
    // }
  };
}

export const libraryController = new LibraryController();
