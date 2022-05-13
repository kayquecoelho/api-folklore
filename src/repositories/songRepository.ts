import { Song } from "@prisma/client";
import prisma from "../database.js";

export type CreateSongData = Omit<Song, "id" | "createdAt">;

async function getByLink(youtubeLink: string) {
  const song = await prisma.song.findUnique({
    where: { youtubeLink },
  });

  return song;
}

async function createOne(songData: CreateSongData) {
  const createdSong = await prisma.song.create({
    data: songData
  });
  return createdSong;
}

export default {
  getByLink,
  createOne
};
