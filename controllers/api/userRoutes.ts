import express, { Request, Response } from "express";
import Character from "../../models/Character";
import { User } from "../../models";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const users = await User.find().populate("characters");
  res.json(users);
});

router.post("/signup", async (req: Request, res: Response) => {
  try {
    const newUser = await User.create(req.body);
    console.log(newUser);
    res.status(200).json({ msg: "New user created", user: newUser });
  } catch (err) {
    res.status(500).json({ msg: "An error occurred", err });
  }
});

export default router;
