import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {});
router.get("/", async (req: Request, res: Response) => {});
router.get("/lineid", async (req: Request, res: Response) => {});
router.put("/lineid", async (req: Request, res: Response) => {});
router.delete("/lineid", async (req: Request, res: Response) => {});
export default router;
