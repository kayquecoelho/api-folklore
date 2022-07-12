import prisma from '../../src/database';

export default async function createArtist() {
  return await prisma.artist.create({
    data: { name: 'Taylor Swift' },
  });
}
