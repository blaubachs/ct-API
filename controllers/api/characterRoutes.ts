import express, { Request, Response } from "express";
import { User, Character } from "../../models";

const router = express.Router();

router.post("/new", async (req: Request, res: Response) => {
  try {
    const newCharacter = await Character.create(req.body);

    const user = await User.findOneAndUpdate(
      { _id: req.body.belongsTo },
      {
        $push: { characters: newCharacter._id },
      }
    );
    if (!user) {
      return res.status(404).json({ msg: "No user found by that id." });
    }

    res.status(200).json({ msg: "character created", char: newCharacter });
  } catch (err) {
    res.status(500).json({ msg: "An error occurred", err });
  }
});

router.put("/change/:userId", async (req: Request, res: Response) => {
  const { charId, stat, value } = req.body;
  const userId = req.params.userId;

  if (value > 100) {
    return res.status(400).json({ msg: "Stats cannot go above 100." });
  }
  if (value < 0) {
    return res.status(400).json({ msg: "Stats cannot go below 0." });
  }

  try {
    const character = await Character.findById(charId);

    if (!character) {
      return res.status(404).json({ msg: "No character found by that id." });
    }

    if (character.belongsTo.toString() !== userId) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    switch (stat) {
      case "health":
        character.health = value;
        break;
      case "mana":
        character.mana = value;
        break;
      case "strength":
        character.strength = value;
        break;
      case "intelligence":
        character.intelligence = value;
        break;
      case "endurance":
        character.endurance = value;
        break;
      case "charisma":
        character.charisma = value;
        break;
      default:
        return res.status(400).json({ msg: "Invalid stat." });
    }

    await character.save();

    res.status(200).json({ msg: "Stat updated", char: character });
  } catch (err) {
    res.status(500).json({ msg: "An error occurred", err });
  }
});

export default router;
