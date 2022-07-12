import { Song } from "@prisma/client";
import supertest from "supertest";
import app from "../../src/app";
import createArtist from "./create-artist";
import generateSongData from "./generate-song-data";

const server = supertest(app);

export default async function createSong(): Promise<Song> {
  const artist = await createArtist();

  const songData = generateSongData(artist);

  const { body: createdSong } = await server.post("/songs").send(songData);

  return createdSong;
}