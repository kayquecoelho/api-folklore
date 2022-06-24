import errors from "../errors/index.js";
import artistRepository from "../repositories/artistRepository.js";
import songRepository, { CreateSongData } from "../repositories/songRepository.js";
import { SongDataSchema } from "../schemas/songSchema.js";
import lyricService from "./lyricService.js";

async function create(songData: SongDataSchema) {
  const artist = await artistRepository.getById(songData.artistId);

  if (!artist) {
    throw errors.badRequest("Artist does not exit");
  }

  const song = await songRepository.getByLink(songData.youtubeLink);

  if (song) throw errors.conflictError("Song is already registered");

  const videoId = youtubeParser(songData.youtubeLink);
  const cover = `http://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

  const createSongData: CreateSongData = {
    artistId: songData.artistId,
    name: songData.name,
    youtubeLink: songData.youtubeLink,
    cover,
    viewsCount: 0,
  };

  const createdSong = await songRepository.createOne(createSongData);

  await lyricService.processLyrics(songData.lrcLyric, createdSong.id);
}

function youtubeParser(url: string) {
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
}

async function getById(songId: number) {
  const song = await ensureSongExists(songId);

  const mapped = song.lyrics.map((lyric) => ({
    ...lyric,
    text: lyric.text.split(" "),
  }));

  return { ...song, lyrics: mapped };
}

async function getAll() {
  const songs = await songRepository.getAll();

  return songs;
}

async function incrementViews(songId: number) {
  const song = await songRepository.getById(songId);
  
  if (!song) throw errors.badRequest("Song doesn't exist!");

  await songRepository.incrementViews(song.id);
}

async function ensureSongExists(songId: number) {
  const song = await songRepository.getById(songId);
  
  if (!song) throw errors.notFoundError("Song does not exist");

  return song;
}

export default {
  create,
  getById,
  getAll,
  incrementViews
};
