import multer from 'multer';
import * as AWS from 'aws-sdk';
import { config } from './config/app.config';

export const upload = multer({ dest: 'images' });
export const cognito = new AWS.CognitoIdentityServiceProvider({ region: config.auth.region });
