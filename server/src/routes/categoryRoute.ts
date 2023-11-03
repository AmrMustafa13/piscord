import { Router } from "express";
import { authToken } from "../middlewares/authToken";
import { createCategory, deleteCategory, editCategory } from "../controllers/categoryController";
const categoryRouter = Router();
categoryRouter.post("/category/:serverId", authToken,createCategory);
categoryRouter.delete("/category/:categoryId", authToken,deleteCategory);
categoryRouter.put("/category/:categoryId", authToken,editCategory);

export default categoryRouter;