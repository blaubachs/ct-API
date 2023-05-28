import express, { Request, Response } from "express";
import Character from "../../models/Character";
import { User } from "../../models";

const router = express.Router();

router.post("/new", async (req: Request, res: Response) => {
  try {
    const newCharacter = await Character.create(req.body);
    console.log(newCharacter);

    const user = await User.findOneAndUpdate(
      { _id: req.body.belongsTo },
      {
        $push: { characters: newCharacter._id },
      }
    );

    res.status(200).json({ msg: "character created", char: newCharacter });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "An error occurred", err });
  }
});

export default router;
