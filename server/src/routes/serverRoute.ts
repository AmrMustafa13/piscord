import { Router } from "express";
import {
  addUserToServerController,
  createServerController,
  deleteServerController,
  editServerController,
  getAllServers,
  getServerController,
} from "../controllers/serverController";
import { authToken } from "../middlewares/authToken";
const serverRouter = Router();
serverRouter.post("/server", authToken, createServerController);
serverRouter.delete("/server/:serverId", authToken, deleteServerController);
serverRouter.put("/server/:serverId", authToken, editServerController);
serverRouter.get("/server/:serverId", authToken, getServerController);
serverRouter.post(
  "/server/:serverId/:userId",
  authToken,
  addUserToServerController
);
serverRouter.get("/server" , getAllServers);
export default serverRouter;
