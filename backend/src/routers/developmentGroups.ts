import { Router } from "express";
import { getAll } from "../controllers/developmentGroups/controller";

const developmentGroupsRouter = Router();

developmentGroupsRouter.get("/", getAll);

export default developmentGroupsRouter;
