import { Lyric } from "@prisma/client";
import supertest from "supertest";
import app from "../src/app";
import createSong from "./factories/create-song";
import cleanDatabase from "./helpers/clean-database";
import seedDatabase from "./helpers/seed-database";

const server = supertest(app);

describe("SONGS TEST", () => {
  beforeEach(cleanDatabase);
  describe("GET/songs", () => {
    it("should return an empty array when database is empty", async () => {
      const response = await server.get("/songs");
      expect(response.body).toEqual([]);
    });

    it("should return an array of songs when database is not empty", async () => {
      await seedDatabase();

      const response = await server.get("/songs");

      expect(response.body.length).toBeGreaterThanOrEqual(1);
      expect(response.body[0]).toHaveProperty("id");
      expect(response.body[0]).toHaveProperty("artistId");
      expect(response.body[0]).toHaveProperty("name");
      expect(response.body[0]).toHaveProperty("cover");
      expect(response.body[0]).toHaveProperty("youtubeLink");
      expect(response.body[0]).toHaveProperty("createdAt");
      expect(response.body[0]).toHaveProperty("viewsCount");
      expect(response.body[0]).toHaveProperty("artist");
    });
  });

  describe("GET/songs/:songId", () => {
    it("should respond with status 400 given a non-numeric songId", async () => {
      const songId = "the1";
      const response = await server.get(`/songs/${songId}`);

      expect(response.statusCode).toBe(400);
    });

    it("should respond with status 404 given inexistent songId", async () => {
      const songId = 1;
      const response = await server.get(`/songs/${songId}`);

      expect(response.status).toEqual(404);
      expect(response.text).toEqual("Song does not exist");
    });

    it("should respond with song data given a existent songId", async () => {
      const song = await createSong();

      const validLyrics: Lyric = {
        id: expect.any(Number),
        songId: expect.any(Number),
        part: expect.any(Number),
        endTime: expect.any(Number),
        startTime: expect.any(Number),
        text: expect.any(Array),
      };

      const response = await server.get(`/songs/${song.id}`);
      
      expect(response.body).toMatchObject(song);
      expect(response.body).toHaveProperty("lyrics");
      expect(response.body.lyrics).toBeInstanceOf(Array);
      expect(response.body.lyrics[0]).toEqual(
        expect.objectContaining(validLyrics)
      );
    });
  });

  describe("POST/songs", () => {

  });
});
