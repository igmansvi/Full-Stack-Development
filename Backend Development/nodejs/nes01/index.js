import express, { urlencoded } from "express";
import http from "http";
import { Server } from "socket.io";

const port = 3000;

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/" + "index.html");
});

io.on("connection", (socket) => {
  socket.emit("chat", "user connected!");
  socket.on("chat", (msg) => {
    console.log(`msg from client: ${msg}`);
    io.emit("chat", msg);
  });
  socket.on("disconnect", () => {
    console.log(`user dissconnected`);
  });
});

server.listen(port, () => {
  console.log(`server is running at: http://localhost:${port}`);
});
