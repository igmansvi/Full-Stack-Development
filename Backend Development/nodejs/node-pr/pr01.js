import e from "express";
import mongoose from "mongoose";
import { body, validationResult } from "express-validator";

const port = 5000;
const api_uri = "mongodb://localhost:27017/test";
const app = e();

function logger(req, res, next) {
  const timestamp = new Date().toISOString();
  console.log(`${req.url} ${req.method} [${timestamp}]`);
  next();
}

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "user",
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", userSchema);

(async () => {
  try {
    await mongoose.connect(api_uri);
    console.log(`mongodb connected`);
  } catch (error) {
    console.log(`error: ${error}`);
  }
})();

app.use(e.json());
app.use(e.urlencoded({ extended: true }));
app.use(logger);

app.get("/", (req, res) => {
  res.send(`
        <form action = '/login' method='post'>
            <input type = 'text' name='name' placeholder='enter your name'>
            <input type = 'email' name='email' placeholder='enter your email' required>
            <input type = 'password' name='password' placeholder='enter your password' required>
            <input type = 'submit' value = 'submit' >
        </form>
        <br> <a href='/dashboard'>dashboard</a>
        <br> <a href='/update-data'>update data</a>
        <br> <a href='/delete-data'>delete data</a>
        `);
});

app.post(
  "/login",
  [
    body("name", "must be a string").optional().isString(),
    body("email", "must be email").isEmail(),
    body("password", "must have password").notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .send(
          `error: ${JSON.stringify(errors.array())} <br> <a href='/'>back</a>`
        );
    }

    try {
      await User(req.body).save();
      res.send(
        "user saved! <br> <a href='/dashboard'>dashboard</a> <br> <a href='/'>back</a>"
      );
    } catch (error) {
      console.log(`error: ${error}`);
    }
  }
);

app.get("/dashboard", async (req, res) => {
  try {
    const users = await User.find();
    res.send(`${JSON.stringify(users)}
        <br> <a href='/update-data'>update data</a>
        <br> <a href='/delete-data'>delete data</a>
        <br> <a href='/'>back</a>
    `);
  } catch (error) {
    console.log(`error: ${error}`);
  }
});

app.get("/update-data", (req, res) => {
  res.send(`
        <form action='/update' method='post'>
            <input type='text' name='id' placeholder='enter the id' required>
            <input type = 'text' name='name' placeholder='enter your name'>
            <input type = 'email' name='email' placeholder='enter your email' required>
            <input type = 'password' name='password' placeholder='enter your password' required>
            <input type = 'submit' value = 'submit' >
        </form>
        <a href='/'>back</a>
        `);
});

app.get("/delete-data", (req, res) => {
  res.send(`
        <form action='/delete' method='get'>
            <input type='text' name='id' placeholder='enter the id' required>
            <input type = 'submit' value = 'submit' >
        </form>
        <a href='/'>back</a>
        `);
});

app.post("/update", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    await User.updateOne(
      { _id: req.body.id },
      { $set: { name, email, password } }
    );
    res.send(
      `user updated! <br> <a href='/dashboard'>dashboard</a> <br> <a href='/'>back</a>`
    );
  } catch (error) {
    console.log(`error: ${error}`);
  }
});

app.get("/delete", async (req, res) => {
  try {
    await User.deleteOne({ _id: req.query.id });
    res.send(
      `user deleted! <br> <a href='/dashboard'>dashboard</a> <br> <a href='/'>back</a>`
    );
  } catch (error) {
    console.log(`error: ${error}`);
  }
});

app.listen(port, () =>
  console.log(`server is running at: http://localhost:${port}`)
);
