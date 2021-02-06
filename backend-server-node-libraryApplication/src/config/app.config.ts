import 'dotenv/config';
const { MONGO_HOST, MONGO_PORT, NODE_ENV, PORT } = process.env;

export const config = {
  application: {
    environment: (NODE_ENV as string) || 'development',
    PORT: PORT,
  },
  db: {
    url: `mongodb://${MONGO_HOST}:${MONGO_PORT}/library-mgt` as string,
  },
};
