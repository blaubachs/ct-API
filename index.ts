import express from "express";
import dotenv from "dotenv";
import db from "./config/connection";
import routes from "./controllers";
import http from "http";
import { Server, Socket } from "socket.io";
import cors from "cors";

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(routes);

io.on("connection", (socket: Socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("a user disconnected");
  });
});

db.once("open", () => {
  server.listen(PORT, () =>
    console.log(`Listening at http://localhost:${PORT}`)
  );
});
