import { Schema, model } from "mongoose";

const CharacterSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: [4, "Character name must be at least 4 characters long."],
    maxlength: [16, "Character name must be less than 16 characters long."],
  },
  description: {
    type: String,
    required: true,
    minlength: [8, "Character description must be at least 8 characters long."],
    maxlength: [
      255,
      "Character description must be less than 255 characters long.",
    ],
  },
  health: {
    type: Number,
    required: true,
    default: 100,
  },
  mana: {
    type: Number,
    required: true,
    default: 100,
  },
  strength: {
    type: Number,
    required: true,
    min: [1, "Strength must be at least 1."],
    max: [100, "Strength must be less than 100."],
  },
  intelligence: {
    type: Number,
    required: true,
    min: [1, "Intelligence must be at least 1."],
    max: [100, "Intelligence must be less than 100."],
  },

  endurance: {
    type: Number,
    required: true,
    min: [1, "Endurance must be at least 1."],
    max: [100, "Endurance must be less than 100."],
  },
  charisma: {
    type: Number,
    required: true,
    min: [1, "Charisma must be at least 1."],
    max: [100, "Charisma must be less than 100."],
  },
});
