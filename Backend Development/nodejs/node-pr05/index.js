import http from "http";
import url from "url";
import fs from "fs";

const port = 5000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  const parseUrl = url.parse(req.url, true);
  const pathname = parseUrl.pathname;
  if (pathname == "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        res.end(err);
      } else {
        res.end(data);
      }
    });
  } else if (pathname == "/add") {
    console.log(req.url);
    const query = parseUrl.query;
    const number1 = parseInt(query.one);
    const number2 = parseInt(query.two);
    const num = number1 + number2;
    res.end(`sum: ${num}`);
  } else {
    res.end("hello, world!");
  }
});

server.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
