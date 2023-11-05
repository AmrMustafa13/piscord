import { RequestHandler } from "express";
import asyncHandler from "express-async-handler";
import { prisma } from "../db/db";
import AppError from "../utils/AppError";
export const isMember: RequestHandler = asyncHandler(async (req, res, next) => {
  const userId = res.locals.userId;
  const serverId = req.params.serverId;
  const server = await prisma.server
    .findUnique({
      where: {
        id: serverId,
      },
      include: {
        members: true,
      },
    })
    .catch((err) => console.log(err));
  if (!server) return next(new AppError("server id is not correct.", 400));
  else if (!server.members.find((member) => member.id === userId) && server.ownerId !== userId) {
    res.status(403).json({ msg: "Only Members can do this action." });
    return;
  }
  next();
});
