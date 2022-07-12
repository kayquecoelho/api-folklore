import { Song } from '@prisma/client';
import prisma from '../database.js';

export type CreateSongData = Omit<Song, 'id' | 'createdAt'>;

async function getAll() {
  const songs = await prisma.song.findMany({
    include: {
      artist: true,
    },
    orderBy: {
      viewsCount: 'desc',
    },
  });
  return songs;
}

async function getByLink(youtubeLink: string) {
  const song = await prisma.song.findUnique({
    where: { youtubeLink },
  });

  return song;
}

async function createOne(songData: CreateSongData) {
  const createdSong = await prisma.song.create({
    data: songData,
  });
  return createdSong;
}

async function getById(songId: number) {
  const song = await prisma.song.findUnique({
    where: {
      id: songId,
    },
    include: {
      artist: true,
      lyrics: {
        orderBy: {
          part: 'asc',
        },
      },
    },
  });
  return song;
}

async function incrementViews(songId: number) {
  return prisma.song.update({
    where: {
      id: songId,
    },
    data: {
      viewsCount: {
        increment: 1,
      },
    },
  });
}

export default {
  getByLink,
  createOne,
  getById,
  getAll,
  incrementViews,
};
