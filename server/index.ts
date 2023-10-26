import express from "express";
import { signupController } from "./controllers/userController";
import { prisma } from "./db";

const app = express();
app.use(express.json());





app.post("/signup",signupController);
app.get("/",async (req,res)=>{
  console.log(await prisma.user.findMany());
});

app.listen(8000, async () => {
  console.log("Server running on port 8000\n");
});
console.log("Shakour");
