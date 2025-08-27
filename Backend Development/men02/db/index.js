import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv({ path: "./.env.local" });

const connectDb = async () => {
  try {
    const db_connection = await mongoose.connect(process.env.CONN_STRING, {
      dbName: process.env.DB_NAME,
    });
    console.log(
      `Connected to database: '${process.env.DB_NAME}' on port: ${process.env.PORT}`
    );
    return db_connection;
  } catch (error) {
    console.log(`error: ${error}`);
  }
};
export default connectDb;
