import e from "express";
import userRouter from "./routes/user.route.js";
import connectDb from "./db/index.js";
import { configDotenv } from "dotenv";

configDotenv({ path: "./.env.local" });

const app = e();
const db = await connectDb();

app.use(e.json());

app.use("/users", userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port: ${process.env.PORT}`);
});
