import express from "express";

const port = 3000;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`${req.method} ${req.url} [${timestamp}]`)
    next();
})

function validateNullBody(req, res, next) {
  if (!req.body.name && !req.body.email) {
    res.send(`body cannnot be empty <a href='/'>go back</a>`);
  } else {
    next();
  }
}

function validateNullName(req, res, next) {
  if (!req.body.name) {
    res.send(`name cannot be empty <a href='/'>go back</a>`);
  } else {
    next();
  }
}

app.get("/", (req, res) => {
  res.send(
    `<form action='/profile' method='post'>
            <input type='text' placeholder='enter your name' name='name' >
            <input type='email' placeholder='enter your email' name='email' >
            <input type='submit' value='submit'>
        </form>`
  );
});

app.post("/profile", validateNullBody, validateNullName, (req, res) => {
  res.send(`welcome ${req.body.name}`);
});

app.listen(port, () => {
  console.log(`server: http://localhost:${port}`);
});

