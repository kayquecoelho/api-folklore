import errors from "../errors/index.js";
import artistRepository from "../repositories/artistRepository.js";
import songRepository, {
  CreateSongData,
} from "../repositories/songRepository.js";
import { SongDataSchema } from "../schemas/songSchema.js";
import lyricService from "./lyricService.js";

async function create(songData: SongDataSchema) {
  const artist = await artistRepository.getById(songData.artistId);

  if (!artist) {
    throw errors.badRequest("Artist does not exit");
  }

  const youtubeLink = await songRepository.getByLink(songData.youtubeLink);

  if (youtubeLink) throw errors.conflictError("Song is already registered");

  const createSongData: CreateSongData = {
    artistId: songData.artistId,
    name: songData.name,
    youtubeLink: songData.youtubeLink,
  };

  const createdSong = await songRepository.createOne(createSongData);

  await lyricService.processLyrics(songData.lrcLyric, createdSong.id);
}

async function getById(songId: number) {
  const song = await songRepository.getById(songId);

  if (!song) throw errors.notFoundError("Song does not exist");
  
  const mapped = song.lyrics.map(lyric => ({...lyric, text: lyric.text.split(" ")}));
  return {...song, lyrics: mapped }
}

export default {
  create,
  getById
};
