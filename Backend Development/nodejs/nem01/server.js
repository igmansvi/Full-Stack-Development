import express from "express";
import userModel from "./models/user.model.js";
import mongoose from "mongoose";

const app = express();
const port = 3000;
const uri = "mongodb://localhost:27017/test";

mongoose
  .connect(uri)
  .then(() => console.log("mongodb connected!"))
  .catch((err) => console.log(`error: ${err}`));

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.get('/users', async (req, res) => {
  const data = await userModel.find();
  res.send(data);
})

app.post("/submit", async (req, res) => {
  await new userModel(req.body).save();
  res.send('saved')
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
