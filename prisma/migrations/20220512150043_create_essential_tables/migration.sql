-- CreateTable
CREATE TABLE "artists" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "songs" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "youtubeLink" TEXT NOT NULL,
    "artistId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "lyrics" (
    "id" SERIAL NOT NULL,
    "songId" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "startTime" TIME(6) NOT NULL,
    "endTime" TIME(6) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "artists_id_key" ON "artists"("id");

-- CreateIndex
CREATE UNIQUE INDEX "artists_name_key" ON "artists"("name");

-- CreateIndex
CREATE UNIQUE INDEX "songs_id_key" ON "songs"("id");

-- CreateIndex
CREATE UNIQUE INDEX "lyrics_id_key" ON "lyrics"("id");

-- AddForeignKey
ALTER TABLE "songs" ADD CONSTRAINT "songs_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "artists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lyrics" ADD CONSTRAINT "lyrics_songId_fkey" FOREIGN KEY ("songId") REFERENCES "songs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
