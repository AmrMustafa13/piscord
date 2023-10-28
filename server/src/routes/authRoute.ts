import { Router } from "express";
import { loginUser, signupUser } from "../controllers/authController";
import { verifyAccount } from "../middlewares/verifyAccount";
import { prisma } from "../db/db";
const authRouter = Router();
authRouter.post("/signup", signupUser);
authRouter.post("/login", loginUser);
authRouter.post("/verify/:token", verifyAccount);
export default authRouter;
