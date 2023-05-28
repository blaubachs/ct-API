import { Schema, model } from "mongoose";
import Character from "./Character";
import bcrypt from "bcrypt";

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: [4, "Username must be at least 4 characters long."],
    maxlength: [16, "Username must be less than 16 characters long."],
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password must be at least 8 characters long."],
    maxlength: [32, "Password must be less than 32 characters long."],
  },
  characters: [{ type: Schema.Types.ObjectId, ref: "Character" }],
});

// before saving the user, hash the password
UserSchema.pre("save", async function save(next) {
  if (!this.isNew || !this.isModified("password")) return next(); // Only hash the password if it's a new user
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

// method returns if the password is valid
UserSchema.methods.validatePassword = async function (data) {
  return bcrypt.compare(data, this.password);
};

const User = model("User", UserSchema);

export default User;
