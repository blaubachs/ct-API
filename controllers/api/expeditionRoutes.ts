import express, { Request, Response } from "express";
import { Expedition } from "../../models";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const allExpeditions = await Expedition.find()
      .populate("owner")
      .populate("members")
      .populate("characters");
    res.status(200).json(allExpeditions);
  } catch (err) {
    res.status(500).json({ msg: "something bad happened", err });
  }
});

router.post("/new", async (req: Request, res: Response) => {
  try {
    const newExpedition = await Expedition.create(req.body);
    res
      .status(200)
      .json({ msg: "Expedition Created!", expedition: newExpedition });
  } catch (err) {
    res.status(500).json({ msg: "An error occurred", err });
  }
});

export default router;
