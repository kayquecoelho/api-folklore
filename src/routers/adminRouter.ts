import { Request, Response, Router } from "express";

const adminRouter = Router();

adminRouter.delete("/", (req: Request, res: Response) => {
  res.sendStatus(200);
});

export default adminRouter;