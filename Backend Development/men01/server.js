import { configDotenv } from "dotenv";
import e from "express";
import { dbConnection } from "./db/index.js";

configDotenv({ path: ".env.local" });

const app = e();
const db = await dbConnection();

app.get("/", (req, res) => {
  res.json({ message: "hello, world!" });
});

app.get("/users", async (req, res) => {
  try {
    const users = await db.collection("users").find({}).toArray();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: `${error}` });
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const user = await db
      .collection("users")
      .findOne({ id: Number(req.params.id) });
    if (!user) {
      return res
        .status(404)
        .json({ "not-found": `user with id: ${req.params.id} not found` });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: `${error}` });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`listening to port: ${process.env.PORT}`);
});
