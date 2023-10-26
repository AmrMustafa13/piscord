import express from "express";
import { loginUser, signupUser } from "./controllers/userController";
import { prisma } from "./db";
import { User } from "./types";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app = express();
app.use(express.json());

app.post("/signup", signupUser);
app.post("/login", loginUser);
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
});
