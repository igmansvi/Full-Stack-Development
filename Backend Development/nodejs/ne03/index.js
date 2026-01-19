// import http from "http";
// import url from "url";
// const port = 5000;
// const options = {
//   "content-type": "text/plain",
// };
// const statuscode = {
//   success: 200,
//   failed: 404,
// };
// const server = http.createServer((req, res) => {
//   res.writeHead(200, options);
//   res.end('hello, world!');
//     res.end(
//       JSON.stringify({
//         msg: "hello, world",
//         name: "node.js",
//         url: req.url,
//         method: req.method,
//         headers: req.headers,
//       })
//     );
//   if (req.url === "/") {
//     res.writeHead(statuscode.success, options);
//     res.end("hello, world!");
//   } else if (req.url === "/about") {
//     res.writeHead(statuscode.success, options);
//     res.end("/about route");
//   } else if (req.url === "/contact") {
//     res.writeHead(statuscode.success, options);
//     res.end("/contact route");
//   } else {
//     res.writeHead(statuscode.failed, options);
//     res.end("404 not found");
//   }
//   const query = url.parse(req.url, true).query;
//   console.log(query);
//   const name = query.name || "user";
//   const location = query.location || "unknown";
//   res.writeHead(statuscode.success, options);
//   res.end(`hello, ${name.toString().toUpperCase()}! from ${location.toString().toUpperCase()}`);
// });
// server.listen(port, () => {
//   console.log(`server is running at: http://localhost:${port}`);
// });


import http from "http";
import url from "url";
import fs from "fs";

const port = 5000;

const status = {
  success: 200,
  failed: 404,
};

const options = {
  "content-type": "text/html",
};

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/calculate")) {
    fs.readFile("./index.html", (err, data) => {
      if (err) {
        res.end(err);
      } else {
        res.writeHead(status.success, options);
        res.end(data);
      }
    });
  } else if (req.url.startsWith("/add")) {
    let t = url.parse(req.url, true).query;
    const sum = Number(t.first) + Number(t.second);
    res.writeHead(status.success, { "content-type": "text/plain" });
    res.end(`sum is ${sum}`);
  } else {
    res.writeHead(status.failed, options);
    res.end("not found");
  }
});

server.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
