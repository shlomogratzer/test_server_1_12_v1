import express, { IRouter } from "express";
import authController from "../controllers/authController";
import usersController from "../controllers/usersController";
import busesController from "../controllers/busesController";
import linesController from "../controllers/linesController";
import driversController from "../controllers/driversController";

const router: IRouter = express.Router();
router.use("/users", usersController);
router.use("/auth", authController);
router.use("/buses", busesController);
router.use("/lines", linesController);
router.use("/drivers", driversController);

export default router;
