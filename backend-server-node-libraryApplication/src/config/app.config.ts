import 'dotenv/config';
const {
  MONGO_HOST,
  MONGO_PORT,
  NODE_ENV,
  PORT,
  REGION,
  COGNITO_USER_POOL_ID,
  TOKEN_USE,
  TOKEN_EXPIRATION,
  MONGO_HOST_PORT,
  BUCKET,
  BUCKET_REGION,
  APP_CLIENT,
} = process.env;

export const config = {
  application: {
    environment: (NODE_ENV as string) || 'development',
    PORT: PORT,
  },
  db: {
    url: MONGO_HOST_PORT,
    // url: `mongodb://${MONGO_HOST}:${MONGO_PORT}/library-mgt` as string,
  },
  auth: {
    region: REGION as string,
    cognitoUserPoolId: COGNITO_USER_POOL_ID as string,
    tokenUse: TOKEN_USE as string,
    tokenExpiration: TOKEN_EXPIRATION as string,
    appClient: APP_CLIENT as string,
  },
  s3: {
    bucket: BUCKET,
    region: BUCKET_REGION,
  },
};
