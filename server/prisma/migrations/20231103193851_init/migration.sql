-- DropForeignKey
ALTER TABLE "server" DROP CONSTRAINT "server_ownerId_fkey";

-- AddForeignKey
ALTER TABLE "server" ADD CONSTRAINT "server_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
