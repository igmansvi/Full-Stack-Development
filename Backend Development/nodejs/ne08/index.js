import express, { urlencoded } from "express";
import session, { Cookie } from "express-session";

const app = express();
const port = 3000;

app.use(urlencoded({ extended: true }));

app.use(
  session({
    secret: "index@mv",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 100 * 60 * 60,
    },
  })
);

app.get("/", (req, res) => {
  res.send(`<a href="/login">login</a>`);
});

app.get("/login", (req, res) => {
  res.send(`
        <form action="/save-login" method="post">
            <input type="text" name="name">
            <input type="email" name="email">
            <input type="submit" value="submit">
        </form>
        `);
});

app.post("/save-login", (req, res) => {
  const { name, email } = req.body;
  req.session.user = {
    username: name,
    useremail: email,
  };
  res.redirect("/add-details");
});

app.get("/add-details", (req, res) => {
  res.send(`
        <form action="/save-detail" method="post">
            <input type="number" name="age">
            <select name="gender">
                <option value="male">male</option>
                <option value="female">female</option>
            </select>
            <input type="submit" value="submit">
        </form>
        `);
});

app.post("/save-detail", (req, res) => {
  const { age, gender } = req.body;
  req.session.user = {
    ...req.session.user,
    userage: age,
    usergender: gender,
  };
  res.redirect("/preview-and-submit");
});

app.get("/preview-and-submit", (req, res) => {
  res.send(`
            username: ${req.session.user.username},<br>
            useremail: ${req.session.user.useremail},<br>
            userage: ${req.session.user.userage},<br>
            usergender: ${req.session.user.usergender},<br>
        `);
});

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
