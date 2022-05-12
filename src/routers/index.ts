import { Router } from "express";
import adminRouter from "./adminRouter.js";

const router = Router();

if (process.env.NODE_ENV === "tests") {
  router.use("admin", adminRouter );
}

export default router;