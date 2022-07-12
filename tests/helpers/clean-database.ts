import prisma from '../../src/database';

export default async function cleanDatabase() {
  await prisma.lyric.deleteMany();
  await prisma.song.deleteMany();
  await prisma.artist.deleteMany();
}
