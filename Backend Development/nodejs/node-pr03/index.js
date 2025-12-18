import express from "express";
import Inventory from "./model/inventory.model.js";
import connectDb from "./db/connect.js";

const port = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDb();

async function addItem() {
  try {
    const response = await Inventory.insertMany([
      {
        name: "laptop",
        quantity: "3",
        price: "57000",
      },
      {
        name: "phone",
        quantity: "2",
        price: "38000",
      },
    ]);
    return response;
  } catch (error) {
    console.log(`${error}`);
    return error;
  }
}

async function fetchAllItem() {
  try {
    const response = await Inventory.find({});
    return response;
  } catch (error) {
    console.log(`${error}`);
    return error;
  }
}

async function getAbove(price) {
  try {
    const response = await Inventory.find({ price: { $gt: price } });
    return response;
  } catch (error) {
    console.log(`${error}`);
  }
}

app.get("/", async (req, res) => {
  const response = await fetchAllItem();
  res.send(response);
});

app.get("/add-item", async (req, res) => {
  const response = await addItem();
  console.log(response);
  res.send(response);
});

app.get("/get-above", async (req, res) => {
  const response = await getAbove(40000);
  console.log(response);
  res.send(response);
});

app.listen(port, () => {
  console.log(`server: http://localhost:3000`);
});
