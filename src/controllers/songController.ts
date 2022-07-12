import { Request, Response } from "express";
import songService from "../services/songService.js";

async function create(req: Request, res: Response) {
  const song = await songService.create(req.body);
  res.status(201).send(song);
}

async function getAll(req: Request, res: Response) {
  const songs = await songService.getAll();
  
  res.send(songs);
}

async function getById(req: Request, res: Response) {
  const songId = +req.params.songId;

  if (isNaN(songId)) return res.sendStatus(400);

  const song = await songService.getById(songId);
  
  res.send(song);
}

async function incrementViews(req: Request, res: Response) {
  const songId = +req.params.songId;

  if (isNaN(songId)) return res.sendStatus(400);

  await songService.incrementViews(songId);
  
  res.sendStatus(200);
}

export default { 
  create,
  getById,
  getAll,
  incrementViews
}