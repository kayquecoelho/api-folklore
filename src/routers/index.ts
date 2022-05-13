import { Router } from "express";
import adminRouter from "./adminRouter.js";
import songRouter from "./songRouter.js";

const router = Router();

if (process.env.NODE_ENV === "tests") {
  router.use("/admin", adminRouter);
}

router.use("/songs", songRouter);

export default router;