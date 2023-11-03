import express from "express";
import cors from "cors";
import { loginUser, signupUser } from "./src/controllers/authController";
import { prisma } from "./src/db/db";
import { User } from "./types";
import globalErrorHandler from "./src/middlewares/globalErrorHandler";
import authRouter from "./src/routes/authRoute";
import { couldStartTrivia } from "typescript";

const app = express();
app.use(express.json());
app.use(cors());
app.use(authRouter);
app.get("/", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json({
      users,
    });
  } catch (err) {
    res.status(400).json({
      ErrorMessage: err,
    });
  }
});
app.use(globalErrorHandler);
app.listen(8000, async () => {
  console.log("Server running on port 8000\n");

  console.log(
    await prisma.user.findMany({ include: { verificationTokens: true } })
  );
});
