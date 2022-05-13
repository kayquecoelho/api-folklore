import { Request, Response } from "express";
import songService from "../services/songService.js";

async function create(req: Request, res: Response) {
  await songService.create(req.body);
  res.sendStatus(201);
}

export default { 
  create
}