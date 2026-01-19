import express from "express";
import productModel from "./models/product.model.js";
import mongoose from "mongoose";

const app = express();
const port = 3000;
const uri = 'mongodb://localhost:27017/test'

mongoose
  .connect(uri)
  .then(() => console.log("database connected"))
  .catch((err) => console.log(`error: ${err}`));

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.post("/add-product", async (req, res) => {
  await productModel(req.body).save();
  res.send("product saved");
});

app.get("/products", async (req, res) => {
  const data = await productModel.find();
  res.send(data);
});

app.listen(port, () => {
  console.log(`server is running at: http://localhost:${port}`);
});
