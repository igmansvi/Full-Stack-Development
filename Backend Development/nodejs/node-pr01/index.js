import express from "express";
import cookieParser from "cookie-parser";

const user = {
  name: "mavi",
  pass: "m0vi",
};

function cookieAuth(req, res, next) {
  if (
    req.cookies.user.username == user.name ||
    req.cookies.user.password == user.pass
  ) {
    next();
  } else {
    res.send(`access denied <br> <a href='/'>go back</a>`);
  }
}

const port = 3000;
const app = express();
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use((res, req, next) => {
  console.log(`${res.method} ${res.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send(
    `<form action='/login' method='post'>
            <input type='text' placeholder='enter your username' name='username' required>
            <input type='password' placeholder='enter your password' name='password' required>
            <input type='submit' value='submit'>
        </form>`
  );
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = { username: username, password: password };
  res.cookie("user", user);
  res.redirect("/dashboard");
});

app.get("/dashboard", cookieAuth, (req, res) => {
  const { username, password } = req.cookies.user;
  res.send(`welcome, ${username} <br> <a href='/logout'>logout<a>`);
});

app.get("/logout", (req, res) => {
  res.clearCookie("user");
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`server: http://localhost:${port}`);
});
