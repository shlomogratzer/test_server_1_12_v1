import express, { Request, Response, NextFunction } from "express";
import {
  deleteUser,
  edituser,
  getUserById,
  registerUser,
} from "../service/usersSrevice";

const router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
  const { email, password, role, name } = req.body;
  try {
    const user = await registerUser({ email, password, role, name });

    if (user) {
      res.status(201).json({
        message: "user is sinup",
        user: user,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json("sinup field");
  }
});
router.get("/:userid", async (req: Request, res: Response) => {
  try {
    const user = await getUserById(req.params.userid);
    res.json(user);
  } catch (err) {
    console.log(err);
  }
});
router.put("/:userid", async (req: Request, res: Response) => {
  try {
    const userid = req.params.userid;
    const { name } = req.body;
    const upuser = await edituser(userid, { name });
    res.json(upuser);
  } catch (error) {
    console.log("update user fald");
  }
});
router.delete("/:userid", async (req: Request, res: Response) => {
  try {
    const user = await deleteUser(req.params.id);
    res.json(user);
  } catch (error: any) {
    error.status || 404, error.message;
  }
});

export default router;
