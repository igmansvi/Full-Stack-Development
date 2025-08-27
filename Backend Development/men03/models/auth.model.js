import mongoose from "mongoose";
import { Schema } from "mongoose";
import bcrypt from "bcrypt";

const authSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "username is required"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
});

authSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(7);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

const Auth = mongoose.model("auth", authSchema);

export default Auth;
