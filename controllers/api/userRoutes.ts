import express, { Request, Response } from "express";
import { User } from "../../models";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const users = await User.find().populate("characters");
  res.json(users);
});

router.post("/login", async (req: Request, res: Response) => {
  try {
    const foundUser = await User.findOne({ username: req.body.username });
    if (!foundUser) {
      res.status(404).json({ message: "Incorrect username or password." });
      return;
    } else {
      const isPasswordValid = await bcrypt.compare(
        req.body.password,
        foundUser.password
      );
      if (!isPasswordValid) {
        res.status(404).json({ message: "Incorrect username or password." });
        return;
      }
      const token = jwt.sign(
        {
          id: foundUser._id,
          username: foundUser.username,
        },
        process.env.JWT_SECRET,
        { expiresIn: "24hr" }
      );
      res.status(200).json({ token, user: foundUser });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/signup", async (req: Request, res: Response) => {
  try {
    const newUser = await User.create(req.body);
    console.log(newUser);
    const token = jwt.sign(
      {
        id: newUser._id,
        username: newUser.username,
      },
      process.env.JWT_SECRET,
      { expiresIn: "24hr" }
    );
    res.status(200).json({ token, user: newUser });
  } catch (err) {
    res.status(500).json({ msg: "An error occurred", err });
  }
});

router.get("/token/isValidToken", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      res.status(401).json({ message: "Invalid token" });
      return;
    }
    const checkToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!checkToken) {
      res.status(401).json({ message: "Invalid token" });
      return;
    }
    res.status(200).json({ data: checkToken });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

export default router;
