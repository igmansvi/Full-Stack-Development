import mongoose from "mongoose";

export async function connectDb(api_uri) {
  try {
    await mongoose.connect(api_uri, {});
    console.log(`mongodb connected`);
  } catch (error) {
    console.log(`error: ${error}`);
  }
}
