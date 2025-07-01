import dotenv from "dotenv";

dotenv.config();

export const appConfig = {
  dbName: process.env.DB_NAME,
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbDialect: process.env.DB_DIALECT,
  
  port: process.env.PORT,
  sessionSecret: process.env.SESSION_SECRET,
  tokenSecret: process.env.TOKEN_SECRET,
  salt: process.env.SALT
};
