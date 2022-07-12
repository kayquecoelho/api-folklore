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

});
