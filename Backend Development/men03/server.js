import e from "express";
import { configDotenv } from "dotenv";
import connectDb from "./db/index.js";
import authRouter from "./routes/auth.route.js";
import { authLogger } from "./middlewares/auth.middleware.js";

configDotenv({
  path: "./.env.local",
});

const app = e();
const db = connectDb();

app.use(e.json());
app.use(authLogger);

app.get("/", (req, res) => {
  res.json({ message: "connected" });
});

app.use("/auth", authRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port: '${process.env.PORT}'`);
});
