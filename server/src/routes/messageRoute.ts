import { Router } from "express";
import { getMessages } from "../controllers/messageController";
const messageRouter = Router();

messageRouter.get("/messages/:channelId", getMessages);

export default messageRouter;
