import { Schema, model } from "mongoose";

const OptionsSchema = new Schema({
  critFailThresh: {
    type: Number,
    max: [50, "Crit fail cannot be higher than 50."],
    required: true,
  },
  failThresh: {
    type: Number,
    required: true,
  },
  successThresh: {
    type: Number,
    required: true,
  },
  critSuccessThresh: {
    type: Number,
    max: [100, "Cannot set crit success above 100."],
    required: true,
  },
});

const ExpeditionSchema = new Schema({
  expeditionCode: {
    type: Number,
    required: true,
    unique: [true, "Expedition code must be unique."],
    minLength: [4, "Expedition code must be at least 4 numbers long."],
    maxLength: [16, "Expedition code must be less than 16 numbers long."],
  },
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: [4, "Expedition name must be at least 4 characters long."],
    maxlength: [40, "Expedition name must be less than 40 characters long."],
  },
  options: { type: OptionsSchema },
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  members: [{ type: Schema.Types.ObjectId, ref: "User" }],
  characters: [{ type: Schema.Types.ObjectId, ref: "Character" }],
  messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
});

const Expedition = model("Expedition", ExpeditionSchema);

export default Expedition;
