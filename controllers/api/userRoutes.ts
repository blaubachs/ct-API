import express, { Request, Response } from "express";
import { User } from "../../models";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import upload from "../../utils/multer";
import cloudinary from "../../utils/cloudinary";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const users = await User.find().populate("characters");
  res.json(users);
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const foundUser = await User.findById(req.params.id).populate("characters");
    if (!foundUser) {
      res.status(404).json({ msg: "No user found by that ID." });
    }
    res.status(200).json(foundUser);
  } catch (err) {
    res.status(500).json({ msg: "An error occurred", err });
  }
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

// ! update this so it adds the id from cloudinary to the user's profile
router.post(
  "/upload/:userId",
  upload.single("image"),
  async (req: Request & { file }, res: Response) => {
    try {
      const foundUser = await User.findById(req.params.userId);
      if (!foundUser) {
        res.status(404).json({ msg: "No user found by that ID." });
      }

      const result = await cloudinary.uploader.upload(req.file.path);

      res.status(200).json({ result });
    } catch (err) {
      res.status(500).json({ msg: "An error occurred", err });
    }
  }
);

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
