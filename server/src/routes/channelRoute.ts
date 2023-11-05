import { Router } from "express";
import {
  createChannel,
  deleteChannel,
  getChannel,
  updateChannel,
} from "../controllers/channelController";
import { authToken } from "../middlewares/authToken";
import { isOwner } from "../middlewares/isOwner";
const channelRouter = Router();

channelRouter.post("/channels", authToken, isOwner, createChannel);
channelRouter.patch("/channels/:id", authToken, isOwner, updateChannel);
channelRouter.delete("/channels/:id", authToken, isOwner, deleteChannel);
channelRouter.get("/channels/:serverId/:id", authToken,isOwner ,getChannel);

export default channelRouter;
