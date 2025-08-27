import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "username is required"],
  },
  email: { type: String, required: [true, "email is required"] },
  password: { type: String, required: [true, "password is required"] },
});

const User = mongoose.model("user", userSchema);

export default User;
