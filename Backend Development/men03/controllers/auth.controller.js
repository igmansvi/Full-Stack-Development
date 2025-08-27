import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Auth from "../models/auth.model.js";

export const signUpWithEmailAndPassword = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const auth = new Auth({ username, email, password });
    const exists = await Auth.findOne({ $or: [{ email }, { username }] });
    if (exists) return res.status(409).json({ error: "user already exists" });
    const response = await auth.save();
    if (!response)
      return res.status(400).json({ error: "registration failed" });
    res.status(201).json({
      message: "user registration successful",
      user: { _id: auth._id, username: auth.username, email: auth.email },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const signInWithEmailAndPassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Auth.findOne({ email });
    if (!user) return res.status(401).json({ error: "invalid-credentials" });
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: "invalid-credentials" });

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ message: "login successful", token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAuthUsers = async (req, res) => {
  try {
    const authUsers = await Auth.find({});
    if (!authUsers) return res.status(404).json({ error: "cannot find users" });
    res.status(200).json(authUsers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
