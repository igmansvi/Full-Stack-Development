import { Router } from "express";
import {
  registerUser,
  getAllUsers,
  getUser,
} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send("connected");
});

userRouter.get("/test", (req, res) => {
  res.send("test successful");
});

userRouter.post("/register", registerUser);

userRouter.get("/all", getAllUsers);

userRouter.get("/:id", getUser);

export default userRouter;
