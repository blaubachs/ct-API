import express from "express";
import dotenv from "dotenv";
import db from "./config/connection";
import routes from "./controllers";
import http from "http";
import { Server, Socket } from "socket.io";
import cors from "cors";
import socketUtils from "./utils/socketUtils";
import { Expedition, Message } from "./models";
import mongoose from "mongoose";

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

  socket.once("join_main_room", async (user: any) => {
    const mainRoom = await socketUtils.getRoom("Main Room");
    socket.join(String(mainRoom._id));

    socket.emit("room_data", mainRoom);
  });

  socket.on("join_room", async ({ roomName, user }) => {
    console.log("received join room request");
    const room = await socketUtils.getRoom(roomName);
    console.log(room);
    if (!room) return;

    // check if user is already in the room
    if (socket.rooms.has(String(room._id))) {
      console.log(user + " is already in " + room.name);
      return;
    }

    socket.join(String(room._id));
    console.log(user + " has joined " + room.name);
    socket.emit("room_data", room);
  });

  socket.on("leave_room", async ({ roomName, user }) => {
    console.log("received leave room request");
    const room = await socketUtils.getRoom(roomName);
    console.log(room);
    if (!room) return;

    console.log(user + " has left " + room.name);
    socket.leave(String(room._id));
  });

  // !
  // ? join a room
  // ? push the member that joined into the room
  // need a way for user to pick a character to join with
  // need to add a way to store messages in that roomcode

  socket.on("chat_message", async (data) => {
    console.log(
      "received message " + data.message.content + " from " + data.roomId
    );

    const createMessage = await Message.create(data.message);

    const addToRoom = await Expedition.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(data.roomId) },
      { $push: { messages: createMessage } },
      { new: true }
    );
    socket.to(data.roomId).emit("chat_message", data);
    // socket.broadcast.emit("chat_message", data);
  });

  socket.on("disconnect", () => {
    console.log("a user disconnected");
  });
});

db.once("open", () => {
  server.listen(PORT, () =>
    console.log(`Listening at http://localhost:${PORT}`)
  );
});
