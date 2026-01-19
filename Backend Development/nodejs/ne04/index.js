import express from "express";

const port = 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("hello, from express");
});

app.get("/about", (req, res) => {
  res.send("/about route");
});

app.get("/greet", (req, res) => {
  // ?name=mansvi
  const name = req.query.name;
  res.send(`hello ${name}, welcome to express!`);
});

app.use(express.urlencoded({ extended: true }));

app.get("/form", (req, res) => {
  res.sendFile(process.cwd() + "/index.html");
});

app.post("/submit", (req, res) => {
  const name = req.body.name;
  res.send(`hello, ${name}`);
});

let user = {
  name: "mansvi",
  city: "patna",
};

app.get("/user", (req, res) => {
  res.json(user);
});

app.put("/user", (req, res) => {
  user = { ...user, ...req.body };
  res.json({ message: "user updated", user });
});

app.delete("/deleteUser", (req, res) => {
  user = {};
  res.json({ message: "user deleted" });
});

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});

// Task: create a student information obj and perform all http methods;
