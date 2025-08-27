require("dotenv").config({path: '.env.local'});

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "hello, world!" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`listening to port: ${process.env.PORT}`);
});
