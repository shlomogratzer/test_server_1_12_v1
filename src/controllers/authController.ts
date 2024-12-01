import express, { Request, Response, NextFunction } from "express";
import { genarateToken } from "../utils/JWT";
import { loginUser, logoutUser } from "../service/authService";

const router = express.Router();

router.post("/login", async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const user = await loginUser(email, password);

    if (user) {
      const token = genarateToken(user._id as string);
      res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 60,
      });
      res.json({ user, token });
    }
  } catch (error: any) {
    console.error(error.message);
  }
});
router.post("/logout", async (req: Request, res: Response) => {
  try {
    logoutUser(res);
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error: any) {
    console.error(error.message);
  }
});

export default router;
