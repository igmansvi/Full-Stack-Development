import express from "express";

const port = 3000;

const app = express();

function test(req, res, next) {
  console.log("middleware started");
  console.log("req url", req.url);
  console.log("req method", req.method);
  next();
}

function authUser(req, res, next) {
    if(req.query.user) {
        console.log("authentication successful");
        next();
    } else {
        console.log("access denied");
        res.send("please login first");
    }
}

function authMid(req, res, next) {
    if(req.body.username === 'mansvi' && req.body.password === '1234') {
        console.log("authentication successful");
        next();
    } else {
        console.log(`access denied`);
        res.send("please login first");
    }
}

app.use(test);
app.use(express.json());

app.post('/auth-post-user', authMid, (req, res) => {
    res.send(`access granted: user ${req.body.username}`)
})

app.get('/auth-get-user', authUser, (req, res) => {
    res.send(`access granted: user ${req.query.user}`);
});

app.get("/", (req, res) => {
  res.send("hello, world!");
});

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
