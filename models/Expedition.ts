import { Schema, model } from "mongoose";

const ExpeditionSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: [4, "Expedition name must be at least 4 characters long."],
    maxlength: [40, "Expedition name must be less than 40 characters long."],
  },
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  members: [{ type: Schema.Types.ObjectId, ref: "User" }],
  characters: [{ type: Schema.Types.ObjectId, ref: "Character" }],
  messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
});

const Expedition = model("Expedition", ExpeditionSchema);

export default Expedition;
