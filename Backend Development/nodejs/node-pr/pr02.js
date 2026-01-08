import e from "express";
import { Pool } from "pg";

const port = 5000;
const app = e();

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "123",
  database: "test",
  port: 5432,
});

app.use(e.json());
app.use(e.urlencoded({ extended: true }));

async function createTable(...args) {
  try {
    await pool.query(
      "CREATE TABLE users(user_id SERIAL PRIMARY KEY, name VARCHAR(50) NOT NULL, email VARCHAR(50) NOT NULL UNIQUE)"
    );
    return true;
  } catch (error) {
    console.log(`error: ${error}`);
    throw error;
  }
}
async function createUser(...args) {
  try {
    const response = await pool.query(
      "INSERT INTO users(name, email) VALUES($1, $2) RETURNING *",
      [args[0], args[1]]
    );
    return response.rows[0];
  } catch (error) {
    console.log(`error: ${error}`);
    throw error;
  }
}
async function readUser(...args) {
  try {
    const response = await pool.query("SELECT * FROM users");
    return response.rows;
  } catch (error) {
    console.log(`error: ${error}`);
    throw error;
  }
}
async function readUserbyId(...args) {
  try {
    const response = await pool.query(
      "SELECT * FROM users WHERE user_id = $1",
      [args[0]]
    );
    return response.rows[0];
  } catch (error) {
    console.log(`error: ${error}`);
    throw error;
  }
}
async function updateUserById(...args) {
  try {
    const response = await pool.query(
      "UPDATE users SET name = $1, email = $2 WHERE user_id = $3 RETURNING *",
      [args[0], args[1], args[2]]
    );
    return response.rows[0];
  } catch (error) {
    console.log(`error: ${error}`);
    throw error;
  }
}
async function deleteUserById(...args) {
  try {
    const response = await pool.query(
      "DELETE FROM users WHERE user_id = $1 RETURNING *",
      [args[0]]
    );
    return response.rows[0];
  } catch (error) {
    console.log(`error: ${error}`);
    throw error;
  }
}
async function deleteTable(...args) {
  try {
    await pool.query("DROP TABLE $1", [args[0]]);
    return true;
  } catch (error) {
    console.log(`error: ${error}`);
    throw error;
  }
}

app.get("/", (req, res) => {
  res.send(`
      <form action='/create' method='post'>
        <input type='text' name='name' placeholder='enter your name' required>
        <input type='email' name='email' placeholder='enter your email' required>
        <input type='submit' value='submit'>
      </form>
    `);
});
app.post("/create", async (req, res) => {
  const { name, email } = req.body;
  try {
    const response = await createUser(name, email);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});
app.get("/read", async (req, res) => {
  try {
    const response = await readUser();
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});
app.put("/update", async (req, res) => {
  const { name, email, id } = req.body;
  try {
    const response = await updateUserById(name, email, id);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});
app.delete("/delete", async (req, res) => {
  const { id } = req.query;
  try {
    const response = await deleteUserById(id);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

app.listen(port, () =>
  console.log(`server is running at: http://localhost:${port}`)
);
