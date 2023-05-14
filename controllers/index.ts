import express, { Request, Response } from "express";
const router = express.Router();

import apiRoutes from "./api";
router.use("/api", apiRoutes);

router.use("/", (req: Request, res: Response) => {
  res.send("wrong route");
});

export default router;
