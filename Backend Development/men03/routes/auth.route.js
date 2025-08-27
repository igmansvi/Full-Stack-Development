import { Router } from "express";
import {
  signUpWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuthUsers,
} from "../controllers/auth.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const authRouter = new Router();

authRouter.post("/register", signUpWithEmailAndPassword);
authRouter.post("/login", signInWithEmailAndPassword);
authRouter.get("/users", authenticate, getAuthUsers);

export default authRouter;
