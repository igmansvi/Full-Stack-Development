import express from "express";

const port = 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = {
  username: "mansvi",
  useremail: "mansviku@gmail.com",
  userpassword: "@mansvi1",
  userrole: "super-admin",
};

function authenticate(req, res, next) {
  const { email, password } = req.body;
  if (db.useremail == email && db.userpassword == password) {
    console.log(`authentication successfull!`);
    next();
  } else {
    console.log(`authentication failed`);
    res.send("access denied");
  }
}
function roleCheck(req, res, next) {
  const { email } = req.body;
  if (db.useremail == email && db.userrole == "super-admin") {
    console.log(`access granted`);
    next();
  } else {
    console.log(`access failed`);
    res.send("access denied! role not verified");
  }
}
function logger(req, res, next) {
  const timestamp = new Date().toISOString();
  console.log(`${req.url} ${req.method} [${timestamp}]`);
  next();
}

app.get("/", (req, res) => {
  res.send(`
            <form action='/login' method='post'>
                <input type='text' name='name' placeholder='enter your name'>
                <input type='email' name='email' placeholder='enter your email'>
                <input type='password' name='password' placeholder='enter your password'>
                <input type='submit' value='submit'>
            </form>
        `);
});

app.post("/login", authenticate, roleCheck, logger, (req, res) => {
  res.send(`welcome ${req.body.name}`);
});

app.listen(port, () => {
  console.log(`server is running at: http://localhost:${port}`);
});
