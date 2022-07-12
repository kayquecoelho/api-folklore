import createSong from "../factories/create-song";


export default async function seedDatabase() {
  await createSong();
}