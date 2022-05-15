import { Router } from "express";
import songController from "../controllers/songController.js";
import validateSchema from "../middlewares/validateSchema.js";
import songSchema from "../schemas/songSchema.js";

const songRouter = Router();

songRouter.post("/", validateSchema(songSchema), songController.create);
songRouter.get("/:songId", songController.getById);

export default songRouter;