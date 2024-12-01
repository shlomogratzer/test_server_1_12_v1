import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

router.get("/:driverid/shifts", async (req: Request, res: Response) => {});
router.put("/driverid/status", async (req: Request, res: Response) => {});

export default router;
