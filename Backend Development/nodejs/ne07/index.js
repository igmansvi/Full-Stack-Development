import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
// import cookieSession from "cookie-session";
import session from "express-session";

const app = express();
const port = 3000;

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
// app.use(
//   cookieSession({
//     name: "session",
//     keys: ["index@mv"],
//     maxAge: 24 * 60 * 60,
//   })
// );

app.use(
  session({
    secret: "index@mv",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 1000 * 60 * 60 },
  })
);

// app.get('/set', (req, res) => {
//     res.cookie('user', req.query.name , {maxAge: 60*60*24});
//     res.send('cookie has been set');
// })

// app.get('/get', (req, res) => {
//     res.send(`cookie value: ${req.cookies.user}`);
// })

// app.get('/reset', (req, res) => {
//     res.clearCookie('user');
//     res.send('cookie is deleted');
// })

// app.get('/', (req, res) => {
//     res.sendFile(process.cwd()+'/index.html')
// })

// app.post('/set', (req, res) => {
//     const theme = req.body.theme;
//     res.cookie('theme', theme);
//     res.send(`theme set to ${theme} <a href="http://localhost:3000/get">get cookie</a>`);
// })

// app.get('/get', (req, res) => {
//     const theme = req.cookies.theme;
//     res.send(`theme value: ${theme} <a href="http://localhost:3000">set cookie</a>`);
// });

// app.get("/visit", (req, res, next) => {
//   req.session.views = (req.session.views || 0) + 1;
//   res.send(`you have visited the page: ${req.session.views} times`);
// });

// app.get("/set-session", (req, res, next) => {
//   req.session.user = req.query.name;
//   req.session.country = req.query.country;
//   res.send(
//     `user value set to: ${req.session.user} & country set to: ${req.session.country} <a href="http://localhost:3000/get-session">get cookie</a>`
//   );
// });

// app.get("/get-session", (req, res, next) => {
//   const user = req.session.user;
//   const country = req.session.country;
//   res.send(`user value: ${user} & country value: ${country}`);
// });

// app.get("/delete-session", (req, res, next) => {
//   req.session = null;
//   res.send("session cleared");
// });

// const userData = {
//   username: "user",
//   password: "pass",
// };

// app.get("/", (req, res) => {
//   res.send(
//     `<form action="/login" method="post">
//       <input type="text" name="username">
//       <input type="password" name="password">
//       <input type="submit" value="login">
//     </form>`
//   );
// });

// app.post("/login", (req, res) => {
//   const { username, password } = req.body;
//   req.session.user = username;
//   req.session.pass = password;
//   setTimeout(() => {
//     res.redirect("/dashboard");
//   }, 1000);
// });

// app.get("/dashboard", (req, res) => {
//   if (
//     req.session.user == userData.username &&
//     req.session.pass == userData.password
//   ) {
//     res.send(`welcome, ${req.session.user}<br><a href="/logout">logout</a>`);
//   } else {
//     res.send(`authorization required! <br> <a href="/">login</a>`);
//   }
// });

// app.get("/logout", (req, res) => {
//   req.session.destroy((err) => {
//     if (err) {
//       res.send(err);
//     } else {
//       setTimeout(() => {
//         res.redirect("/");
//       }, 1000);
//     }
//   });
// });

app.listen(port, () => {
  console.log(`server is running: http://localhost:${port}`);
});
