import { Schema, model } from "mongoose";

const MessageSchema = new Schema({
  from: { type: Schema.Types.ObjectId, ref: "User" },
  content: {
    type: String,
    required: true,
  },
});

const Message = model("Message", MessageSchema);

export default Message;
