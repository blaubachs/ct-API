import { Schema, model } from "mongoose";

const OptionsSchema = new Schema({
  critFailThresh: {
    type: Number,
    max: [50, "Crit fail cannot be higher than 50."],
    default: 25,
    required: true,
  },
  failThresh: {
    type: Number,
    default: 50,
    required: true,
  },
  successThresh: {
    type: Number,
    default: 75,
    required: true,
  },
  critSuccessThresh: {
    type: Number,
    max: [100, "Cannot set crit success above 100."],
    default: 90,
    required: true,
  },
});

const ExpeditionSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: [4, "Expedition name must be at least 4 characters long."],
    maxlength: [40, "Expedition name must be less than 40 characters long."],
  },
  options: { type: OptionsSchema, default: {} },
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  members: [{ type: Schema.Types.ObjectId, ref: "User" }],
  characters: [{ type: Schema.Types.ObjectId, ref: "Character" }],
  messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
});

const Expedition = model("Expedition", ExpeditionSchema);

export default Expedition;
