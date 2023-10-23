import express from "express";
import { PrismaClient } from '@prisma/client'
const app = express();
const prisma = new PrismaClient()


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(8000, async () => {
  console.log("Server running on port 8000\n")
  console.log(process.env.DATABASE_URL);

  console.log(await prisma.user.findMany());
});
