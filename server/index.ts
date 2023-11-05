import express from "express";
import { prisma } from "./src/db/db";
import globalErrorHandler from "./src/middlewares/globalErrorHandler";
import authRouter from "./src/routes/authRoute";
import serverRouter from "./src/routes/serverRoute";
import channelRouter from "./src/routes/channelRoute";
import messageRouter from "./src/routes/messageRoute";
import categoryRouter from "./src/routes/categoryRoute";

const app = express();
app.use(express.json());
app.use(authRouter);
app.use(serverRouter);
app.use(channelRouter);
app.use(messageRouter);
app.use(categoryRouter);
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
  console.log("Server running on port 8000.\n");
});
