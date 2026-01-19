import mongoose from "mongoose";

const apiUrl = process.env.MONGODB_URI || "mongodb://localhost:27017/test";

async function connectDb() {
  try {
    const response = await mongoose.connect(apiUrl);
    console.log(`database connected!`);
  } catch (error) {
    console.log(`${error}`);
  }
}

export default connectDb;
