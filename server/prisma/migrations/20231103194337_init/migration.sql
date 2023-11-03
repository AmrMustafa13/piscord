-- DropForeignKey
ALTER TABLE "category" DROP CONSTRAINT "category_serverId_fkey";

-- DropForeignKey
ALTER TABLE "channel" DROP CONSTRAINT "channel_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "message" DROP CONSTRAINT "message_channelId_fkey";

-- DropForeignKey
ALTER TABLE "message" DROP CONSTRAINT "message_userSentId_fkey";

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "server"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "channel" ADD CONSTRAINT "channel_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_userSentId_fkey" FOREIGN KEY ("userSentId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
