import prisma from "../src/database.js";

async function seed() {
  await prisma.artist.create({
    data: { name: "Taylor Swift", id: 1 },
  });

  await prisma.song.create({
    data: {
      name: "the 1",
      youtubeLink: "https://www.youtube.com/watch?v=KsZ6tROaVOQ",
      artistId: 1,
    },
  });
}

seed()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
