import mongoose from "mongoose";
import { envVariables } from "./envVariables";

const mongooseString: string = envVariables.MONGODB_HOST;

async function dbConfig() {
  try {
    const conn = await mongoose.connect(mongooseString);
    console.log(`Database is connected...!${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
}

export default dbConfig;
