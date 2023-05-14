import { ConnectOptions, connect, connection } from "mongoose";

const connectionString = "mongodb://127.0.0.1:27017/rp-chat-db";

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);

export default connection;
