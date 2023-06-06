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

export default router;
