import dotenv from 'dotenv';

dotenv.config();

const config = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV,
  WHITELIST_ORIGINS: [`${process.env.APP_URL}`],
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY
};

export default config;
