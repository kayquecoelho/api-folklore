import prisma from "../database.js";

async function getById(artistId: number) {
  const artist = await prisma.artist.findUnique({
    where: { id: artistId }
  });

  return artist;  
}

export default {
  getById
}