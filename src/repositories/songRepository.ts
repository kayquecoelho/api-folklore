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

async function getById(songId: number) {
  const song = await prisma.song.findUnique({
    where: {
      id: songId
    },
    include: {
      artist: true,
      lyrics: {
        orderBy: {
          part: "asc"
        }
      }
    }
  });
  return song;
}

export default {
  getByLink,
  createOne,
  getById
};
