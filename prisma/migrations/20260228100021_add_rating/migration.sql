-- CreateTable
CREATE TABLE "rating" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "tmdbId" INTEGER NOT NULL,
    "value" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "rating_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "rating_userId_idx" ON "rating"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "rating_userId_tmdbId_key" ON "rating"("userId", "tmdbId");

-- AddForeignKey
ALTER TABLE "rating" ADD CONSTRAINT "rating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
