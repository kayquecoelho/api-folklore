import { Lrc } from "lrc-kit";
import lyricRepository from "../repositories/lyricRepository.js";

async function processLyrics(lrcLyric: string, songId: number) {
  const timedLyrics = Lrc.parse(lrcLyric).lyrics;
  const arrangedLyrics = timedLyrics.map((line, index) => ({
    text: line.content,
    songId,
    part: index + 1,
    startTime: line.timestamp,
    endTime: timedLyrics[index + 1]?.timestamp || null,
  }));

  await lyricRepository.createMany(arrangedLyrics);
}

export default {
  processLyrics,
};
