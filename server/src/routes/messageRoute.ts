import { Router } from "express";
import { getMessages } from "../controllers/messageController";
import { authToken } from "../middlewares/authToken";
import { isMember } from "../middlewares/isMember";
const messageRouter = Router();

messageRouter.get("/messages/:serverId/:channelId", authToken,isMember,getMessages);

export default messageRouter;
