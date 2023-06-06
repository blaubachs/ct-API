import express, { Request, Response } from "express";
import userRoutes from "./userRoutes";
import characterRoutes from "./characterRoutes";
import expeditionRoutes from "./expeditionRoutes";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/characters", characterRoutes);
router.use("/expeditions", expeditionRoutes);

export default router;
