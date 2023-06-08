import { Schema, model } from "mongoose";

// ! need to add username
const MessageSchema = new Schema({
  from: { type: Schema.Types.ObjectId, ref: "User" },
  content: {
    type: String,
    required: true,
  },
  inCharacter: {
    type: Boolean,
    required: true,
  },
  character: {
    type: Schema.Types.ObjectId,
    ref: "Character",
    required: function () {
      return this.inCharacter;
    },
  },
});

const Message = model("Message", MessageSchema);

export default Message;
