import { Lyric } from "@prisma/client";
import prisma from "../database.js";

type LyricData = Omit<Lyric, "id">;

async function createMany(lyrics: LyricData[]) {
  return prisma.lyric.createMany({
    data: lyrics,
  });
}

export default {
  createMany,
};
