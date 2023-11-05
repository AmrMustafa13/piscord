import { Router } from "express";
import { createMessage, getMessages } from "../controllers/messageController";
import { authToken } from "../middlewares/authToken";
import { isMember } from "../middlewares/isMember";
const messageRouter = Router();

messageRouter.get("/messages/:serverId/:channelID", authToken,isMember,getMessages);
messageRouter.post("/messages/:serverId/:channelID", authToken,isMember,createMessage);

export default messageRouter;
