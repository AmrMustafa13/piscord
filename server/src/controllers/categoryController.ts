import { RequestHandler } from "express";
import {
  ExpressHandler,
  Server,
  User,
  createCategoryRequest,
  createCategoryResponse,
  deleteCategoryRequest,
  deleteCategoryResponse,
  editCategoryRequest,
  editCategoryResponse,
} from "../../types";
import { prisma } from "../db/db";

export const createCategory: ExpressHandler<
  createCategoryRequest,
  createCategoryResponse
> = async (req, res, next) => {
  if (!req.body.name) {
    res.status(400).json({ msg: "name field is required." });
    return;
  }
  const userId = res.locals.userId;
  const serverId = req.params.serverId;
  const server = await prisma.server.findUnique({
    where: {
      id: serverId,
    },
  });

  if (!server) {
    res.status(400).json({ msg: "server id is not correct." });
    return;
  } else if (server.ownerId != userId) {
    res.status(403).json({ msg: "only admins can create categories." });
    return;
  } else {
    const category = await prisma.category.create({
      data: {
        name: req.body.name!,
        serverId: req.params.serverId,
      },
    });
    res.status(200).json(category);
    return;
  }
};

export const deleteCategory: ExpressHandler<
  deleteCategoryRequest,
  deleteCategoryResponse
> = async (req, res, next) => {
  const userId = res.locals.userId;
  const categoryId = req.params.categoryId;

  console.log(userId, categoryId);

  const category = await prisma.category.findUnique({
    where: {
      id: categoryId,
    },
    include: {
      server: true,
    },
  });

  if (!category) {
    res.status(400).json({ msg: "category id is not correct." });
    return;
  } else if (category.server.ownerId != userId) {
    res.status(403).json({ msg: "only admins can delete categories." });
    return;
  } else {
    await prisma.category.delete({
      where: {
        id: categoryId,
      },
    });
    res.status(200).json({});
    return;
  }
};

export const editCategory: ExpressHandler<
  editCategoryRequest,
  editCategoryResponse
> = async (req, res, next) => {
  if (!req.body.name) {
    res.status(400).json({ msg: "name field is required." });
    return;
  }
  const userId = res.locals.userId;
  const categoryId = req.params.categoryId;

  console.log("h");

  const category = await prisma.category.findUnique({
    where: {
      id: categoryId,
    },
    include: {
      server: true,
    },
  });

  if (!category) {
    res.status(400).json({ msg: "category id is not correct." });
    return;
  } else if (category.server.ownerId != userId) {
    res.status(403).json({ msg: "only admins can edit categories." });
    return;
  } else {
    await prisma.category.update({
      where: {
        id: categoryId,
      },
      data: {
        name: req.body.name,
      },
    });
    res.status(200).json({});
    return;
  }
};
export const getAllCategories : RequestHandler = async (req , res , next) => {
  const categories = await prisma.category.findMany();
  res.status(200).json({categories});
}