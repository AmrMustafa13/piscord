import asyncHandler from "express-async-handler";
import {
  ExpressHandler,
  createMessageRequest,
  createMessageResponse,
  getMessagesRequest,
  getMessagesResponse,
} from "../../types";
import { prisma } from "../db/db";
import AppError from "../utils/AppError";
import { RequestHandler } from "express";

// Quick remainder //
// channelID --> the parameter in the message routes
// channelId --> the column name in the DB

export const getMessages: RequestHandler = asyncHandler(async (req, res, next) => {
  const { channelID } = req.params;
  const channel = await prisma.channel.findUnique({
    where: { id: channelID },
    include: {
      messages:true
    }
  });
  if (!channel)
    return next(new AppError("There's no channel with this ID", 400));
  res.status(200).json(channel.messages);
});
export const createMessage: ExpressHandler<
  createMessageRequest,
  createMessageResponse
> = asyncHandler(async (req, res, next) => {
  const { channelID } = req.params;
  const { content } = req.body;
  const userId = res.locals.userId;
  if (!content) return next(new AppError("Cannot send empty messages", 400));
  if (!channelID)
    return next(
      new AppError(
        "Please provide the channel ID you want to send the message to",
        400
      )
    );
  const message = await prisma.message.create({
    data: {
      channelId:channelID,
      content,
      userSentId: userId,
    },
  });
  res.status(200).json({
    content: message.content,
    channelId: message.channelId,
    userSentId: message.userSentId,
  });
});
