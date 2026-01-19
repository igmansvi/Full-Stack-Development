import express from "express";
import http from "http";
import { Server } from "socket.io";

const port = 3000;

const app = express();
app.use(express.static(process.cwd()));
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("message", (data) => {
    io.emit("message", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/index.html");
});

server.listen(port, () => {
  console.log(`server is running at: http://localhost:${port}`);
});
