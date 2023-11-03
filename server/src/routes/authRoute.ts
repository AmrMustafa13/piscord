import { Router } from "express";
import { loginUser, signupUser } from "../controllers/authController";
import { verifyAccount } from "../middlewares/verifyAccount";
import { validateSignUp } from "../validation/signUpValidation";
import { validateSignIn } from "../validation/signInValidation";

const authRouter = Router();
authRouter.post("/signup",validateSignUp(), signupUser);
authRouter.post("/login",validateSignIn(), loginUser);
authRouter.post("/verify/:token", verifyAccount);

export default authRouter;
