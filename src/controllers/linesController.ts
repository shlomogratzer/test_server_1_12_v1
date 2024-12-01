import express, { Request, Response, NextFunction } from "express";
import { createLine } from "../service/lineService";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const { schedule, lineNumber, stations, name } = req.body;
  try {
    const line = await createLine({ schedule, lineNumber, stations, name });

    if (line) {
      res.status(201).json({
        message: "line is sinup",
        line: line,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json("create line field");
  }
});
router.get("/", async (req: Request, res: Response) => {});
router.get("/lineid", async (req: Request, res: Response) => {});
router.put("/lineid", async (req: Request, res: Response) => {});
router.delete("/lineid", async (req: Request, res: Response) => {});
export default router;
