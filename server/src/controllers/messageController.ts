import asyncHandler from "express-async-handler";
import {
  ExpressHandler,
  getMessagesRequest,
  getMessagesResponse,
} from "../../types";
import { prisma } from "../db/db";
import AppError from "../utils/AppError";
export const getMessages: ExpressHandler<
  getMessagesRequest,
  getMessagesResponse
> = asyncHandler(async (req, res, next) => {
    const {channelId} = req.params;
    const channelMessages = await prisma.message.findMany({where: {channelId}});
    if(!channelMessages) return next(new AppError("There's no channel with this ID" , 400));
    res.status(200).json(...channelMessages);
});
