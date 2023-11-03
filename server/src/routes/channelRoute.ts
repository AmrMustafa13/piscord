import { Router } from "express";
import { createChannel, deleteChannel, getChannel, updateChannel } from "../controllers/channelController";
const channelRouter = Router();

channelRouter.post('/channels' , createChannel);
channelRouter.patch('/channels/:id' , updateChannel);
channelRouter.delete('/channels/:id' , deleteChannel);
channelRouter.get('/channels/:id' , getChannel);

export default channelRouter;