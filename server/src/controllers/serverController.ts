import {
  ExpressHandler,
  User,
  addUserToServerRequest,
  addUserToServerResponse,
  createServerRequest,
  createServerResponse,
  editServerRequest,
  editServerResponse,
  getServerRequest,
  getServerResponse,
} from "../../types";
import { prisma } from "../db/db";

export const createServerController: ExpressHandler<
  createServerRequest,
  createServerResponse
> = async (req, res, next) => {
  if (!req.body.name) {
    res.status(400).json({ msg: "server name is required" });
    return;
  }

  const server= await prisma.server.create({
    data: {
      name: req.body.name,
      ownerId: res.locals.userId,
    },
  });

  res.status(200).json({
    id: server.id,
    name: server.name,
    ownerId: server.ownerId,
    createdAt: server.createdAt.toISOString(),
  });
};

export const deleteServerController: ExpressHandler<{}, {}> = async (
  req,
  res,
  next
) => {
  const serverId = req.params.serverId;
  const server = await prisma.server.findUnique({
    where: {
      id: serverId,
    },
  });
  const ownerId = server?.ownerId;
  console.log(ownerId + " " + res.locals.userId);

  if (!ownerId) {
    res.status(400).json({ msg: "serverId is not correct" });
  } else if (ownerId != res.locals.userId) {
    res
      .status(403)
      .json({ msg: "not authorized. only server owner can edit the server." });
  } else {
    const deletedServer = await prisma.server.delete({
      where: {
        id: serverId,
      },
    });
    res.status(200).json(deletedServer);
  }
};

export const editServerController: ExpressHandler<
  editServerRequest,
  editServerResponse
> = async (req, res, next) => {
  if (!req.body.name) {
    res.status(400).json({ msg: "server name is required" });
    return;
  }
  const serverId = req.params.serverId;
  const server = await prisma.server.findUnique({
    where: {
      id: serverId,
    },
  });
  const ownerId = server?.ownerId;
  console.log(ownerId + " " + res.locals.userId);

  if (!ownerId) {
    res.status(400).json({ msg: "serverId is not correct" });
  } else if (ownerId != res.locals.userId) {
    res
      .status(403)
      .json({ msg: "not authorized. only server owner can edit the server." });
  } else {
    const updatedServer = await prisma.server.update({
      where: {
        id: serverId,
      },
      data: {
        name: req.body.name,
      },
    });
    res.status(200).json(updatedServer);
  }
};

export const getServerController: ExpressHandler<
  getServerRequest,
  getServerResponse
> = async (req, res, next) => {
  //   console.log(await prisma.server.findMany());
  const serverId = req.params.serverId;
  const server = await prisma.server.findUnique({
    where: {
      id: serverId,
    },
    include: {
      categories: {
        include: {
          channels: true,
        },
      },
      members: true,
    },
  });

  console.log(server);
  console.log(res.locals.userId);
  if (!server) {
    res.status(400).json({ msg: "server is not found" });
  } else if (
    server.ownerId !== res.locals.userId &&
    !isMember(res.locals.userId, server.members)
  ) {
    res.status(403).json({ msg: "not authorized" });
  } else {
    res.status(200).json(server);
  }
};

const isMember = (id: string, users: User[]): boolean => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      return true;
    }
  }
  return false;
};

export const addUserToServerController: ExpressHandler<
  addUserToServerRequest,
  addUserToServerResponse
> = async (req, res, next) => {
  const userIdToAdd = req.params.userId;
  const serverId = req.params.serverId;
  const loggedUserId = res.locals.userId;

  console.log(userIdToAdd + " " + serverId + " " + loggedUserId + "\n");

  const server = await prisma.server.findUnique({
    where: {
      id: serverId,
    },
    include: {
      members: true,
    },
  });

  if (!server) {
    res.status(400).json({ msg: "server is not found" });
  } else if (server.ownerId !== loggedUserId) {
    res.status(403).json({ msg: "not authorized" });
  } else if (userIdToAdd === server.ownerId) {
    res.status(400).json({ msg: "user is already server admin" });
  } else if (isMember(userIdToAdd, server.members) === true) {
    res.status(400).json({ msg: "user is already a member in the server" });
  } else {
    await prisma.server.update({
      where: {
        id: serverId,
      },
      data: {
        members: {
          connect: userIdToAdd,
        },
      },
    });
    res.status(200);
  }
};
