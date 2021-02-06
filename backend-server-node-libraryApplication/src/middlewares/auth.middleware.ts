import { NextFunction, Response, Request } from 'express';
import CognitoExpress from 'cognito-express';

import HttpException from '../exceptions/HttpException';
import { config } from '../config/app.config';

const cognitoExpress = new CognitoExpress({
  region: config.auth.region,
  cognitoUserPoolId: config.auth.cognitoUserPoolId,
  tokenUse: config.auth.tokenUse,
  tokenExpiration: parseInt(config.auth.tokenExpiration),
});

const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { token } = req.headers;
  cognitoExpress.validate(token, (err, response) => {
    if (err) {
      console.log(err, 'err');
      next(new HttpException(401, err));
    } else {
      res.locals.user = response;
      next();
    }
  });
};

export default authMiddleware;
