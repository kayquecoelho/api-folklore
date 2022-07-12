import errors from "../errors/index.js";
import artistRepository from "../repositories/artistRepository.js";
import songRepository, { CreateSongData } from "../repositories/songRepository.js";
import { SongDataSchema } from "../schemas/songSchema.js";
import lyricService from "./lyricService.js";

async function create(songData: SongDataSchema) {
  const { artistId, name, youtubeLink, lrcLyric } = songData;

  await ensureArtistExist(artistId);

  await ensureSongIsNotRegistered(youtubeLink);

  const videoId = getVideoId(youtubeLink);
  const cover = `http://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

  const createSongData: CreateSongData = {
    artistId,
    name,
    youtubeLink,
    cover,
    viewsCount: 0,
  };

  const createdSong = await songRepository.createOne(createSongData);

  await lyricService.processLyrics(lrcLyric, createdSong.id);

  return createdSong;
}

async function ensureSongIsNotRegistered(youtubeLink: string) {
  const song = await songRepository.getByLink(youtubeLink);

  if (song)
    throw errors.conflictError("Song is already registered!");
}

async function ensureArtistExist(artistId: number) {
  const artist = await artistRepository.getById(artistId);

  if (!artist) {
    throw errors.badRequest("Artist does not exit!");
  }
}

function getVideoId(url: string) {
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
