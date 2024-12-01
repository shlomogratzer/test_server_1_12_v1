import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {});
router.get("/", async (req: Request, res: Response) => {});
router.get("/busid", async (req: Request, res: Response) => {});
router.put("/busid", async (req: Request, res: Response) => {});
router.delete("/busid", async (req: Request, res: Response) => {});

export default router;
