import express from "express";
import pool from "./db/connect.js";

async function createTable() {
  const response = await pool.query(
    "CREATE TABLE users(user_id SERIAL PRIMARY KEY, name VARCHAR(50), EMAIL VARCHAR(100))"
  );
  return response;
}

async function createUser() {
  const response = await pool.query(
    "INSERT INTO users (name, email) VALUES($1, $2) RETURNING *",
    ["mansvi", "mansviku@gmail.com"]
  );
  return response;
}

async function getUser() {
  const response = await pool.query("SELECT * FROM users");
  return response;
}

async function deleteUser(username) {
  const response = await pool.query(
    `DELETE FROM users WHERE name = ${username}`
  );
  return response;
}

const port = 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    "hello, world! <br> <a href='/create-table'>create table users</a> <br> <a href='/create-user'>create test user</a> <br> <a href='/get-user'>get users</a> <br> <a href='/delete-user'>delete test user</a>"
  );
});

app.get("/create-table", async (req, res) => {
  const response = await createTable();
  res.send(response);
});

app.get("/create-user", async (req, res) => {
  const response = await createUser();
  res.send(response.rows[0]);
});

app.get("/get-user", async (req, res) => {
  const response = await getUser();
  res.send(response.rows);
});

app.get("/delete-user", async (req, res) => {
  const username = req.query.name;
  const response = await deleteUser(username);
  console.log(response);
  res.send(`${response.rowCount} rows deleted`);
});

app.listen(port, () => {
  console.log(`server is running at: http://localhost:${port}`);
});
