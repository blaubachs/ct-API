import express, { Request, Response } from "express";
import userRoutes from "./userRoutes";
import characterRoutes from "./characterRoutes";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/characters", characterRoutes);

export default router;
