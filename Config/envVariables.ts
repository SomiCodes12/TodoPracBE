import dotenv from "dotenv";
dotenv.config();

export const envVariables = {
  PORT: process.env.PORT!,
  MONGODB_HOST: process.env.MONGODB_HOST!,
};
