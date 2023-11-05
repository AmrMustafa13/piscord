import { Router } from "express";
import {
  createChannel,
  deleteChannel,
  getAllChannels,
  getChannel,
  updateChannel,
} from "../controllers/channelController";
import { authToken } from "../middlewares/authToken";
import { isOwner } from "../middlewares/isOwner";
const channelRouter = Router();

channelRouter.post("/channels/:serverId/:categoryID", authToken, isOwner, createChannel);
channelRouter.patch("/channels/:id", authToken, isOwner, updateChannel);
channelRouter.delete("/channels/:id", authToken, isOwner, deleteChannel);
channelRouter.get("/channels/:serverId/:id", authToken,isOwner ,getChannel);
channelRouter.get("/channels", authToken,getAllChannels);

export default channelRouter;
