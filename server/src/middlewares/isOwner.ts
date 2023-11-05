import { RequestHandler } from "express";
import asyncHandler from "express-async-handler";
import { prisma } from "../db/db";
import AppError from "../utils/AppError";
export const isOwner: RequestHandler = asyncHandler(async (req, res, next) => {
  const userId = res.locals.userId;
  const serverId = req.params.serverId;
  const server = await prisma.server.findUnique({
    where: {
      id: serverId,
    },
  });

  if (!server) return next(new AppError("server id is not correct.", 400));
  else if (server) {
    res.status(403).json({ msg: "only admins can create categories." });
    return;
  }
  next();
});