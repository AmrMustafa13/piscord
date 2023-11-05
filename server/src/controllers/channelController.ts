import asyncHandler from "express-async-handler";
import {
  ExpressHandler,
  createChannelRequest,
  createChannelResponse,
  deleteChannelRequest,
  deleteChannelResponse,
  getChannelRequest,
  getChannelResponse,
  updateChannelRequest,
  updateChannelResponse,
} from "../../types";
import { prisma } from "../db/db";
import AppError from "../utils/AppError";
import { RequestHandler } from "express";
export const createChannel: ExpressHandler<
  createChannelRequest,
  createChannelResponse
> = asyncHandler(async (req, res, next) => {
  const {categoryID} = req.params;
  const { name } = req.body;
  if (!name)
    return next(new AppError("Channel must have a name", 400));
  const category = await prisma.category.findUnique({
    where: { id: categoryID },
  });
  if (!category)
    return next(new AppError("There's no category with that id", 400));
  const channel = await prisma.channel.create({ data: { name , categoryId:categoryID } });
  if (!channel) return next(new AppError("Internal Server Error", 500));
  res.status(200).json({
    id: channel.id,
    name: channel.name,
    categoryId: channel.categoryId,
    createdAt: channel.createdAt.toISOString(),
  });
});
export const getChannel: ExpressHandler<getChannelRequest, getChannelResponse> =
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const channel = await prisma.channel.findUnique({ where: { id } });
    if (!channel)
      return next(new AppError("There's no channel with this ID", 400));
    res.status(200).json(channel);
  });
export const deleteChannel: ExpressHandler<
  deleteChannelRequest,
  deleteChannelResponse
> = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const channel = await prisma.channel.findUnique({ where: { id } });
  if (!channel)
    return next(new AppError("There's no channel with this ID", 400));
  res.status(200).json({ message: "Channel deleted successfully" });
});

export const updateChannel: ExpressHandler<
  updateChannelRequest,
  updateChannelResponse
> = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;
  const channelToBeUpdated = await prisma.channel.findUnique({ where: { id } });
  if (!channelToBeUpdated)
    return next(new AppError("There's no channel with this ID", 400));
  const newUpdatedChannel = await prisma.channel.update({
    where: { id },
    data: { name },
  });
  res.status(200).json(newUpdatedChannel);
});

export const getAllChannels: RequestHandler = asyncHandler(
  async (req, res, next) => {
    const channels = await prisma.channel.findMany();
    res.status(200).json({
      channels,
    });
  }
);
