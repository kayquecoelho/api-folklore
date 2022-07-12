import { NextFunction, Request, Response } from "express";
import CustomizedError from "../errors/errorModel.js";

export default function errorHandler(
  error: Error | CustomizedError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if ("type" in error) {
    if (error.type === "bad_request") {
      return res.status(400).send(error.message);
    }
    else if (error.type === 'not_found') {
      return res.status(404).send(error.message);
    }
    else if (error.type === "conflict") {
      return res.status(409).send(error.message);
    } 
  }
  console.log(error);
  res.sendStatus(500);
}
