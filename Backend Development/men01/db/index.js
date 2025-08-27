import { configDotenv } from "dotenv";

configDotenv({ path: ".env.local" });

import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.CONN_STRING);

export const dbConnection = async () => {
  try {
    const db_connection = (await client.connect()).db(process.env.DB_NAME);
    console.log(
      `Connected to database: '${process.env.DB_NAME}' on port: ${process.env.PORT}`
    );
    return db_connection;
  } catch (error) {
    console.error(`error: ${error}`);
  }
};
