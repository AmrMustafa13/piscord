import { Router } from "express";
import { authToken } from "../middlewares/authToken";
import {
  createCategory,
  deleteCategory,
  editCategory,
  getAllCategories,
} from "../controllers/categoryController";
const categoryRouter = Router();
categoryRouter.get("/category", getAllCategories);
categoryRouter.post("/category/:serverId", authToken, createCategory);
categoryRouter.delete("/category/:categoryId", authToken, deleteCategory);
categoryRouter.put("/category/:categoryId", authToken, editCategory);

export default categoryRouter;
