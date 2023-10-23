import { prisma } from "../db";
import { ExpressHandler, User, signupRequest, signupResponse } from "../types";
import bcrypt from "bcrypt";

export const signupController: ExpressHandler<
  signupRequest,
  signupResponse
> = async (req, res) => {
  try {
    if (
      !req.body.username ||
      !req.body.dateOfBirth ||
      !req.body.email ||
      !req.body.password ||
      !req.body.nickName
    ) {
      res.sendStatus(400).json({ msg: "fields are not found" });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = (await bcrypt.hash(
      req.body.password,
      salt
    )) as string;

    const user: User = {
      username: req.body.username,
      dateOfBirth: new Date(req.body.dateOfBirth).toISOString(),
      email: req.body.email,
      password: hashedPassword,
      nickName: req.body.nickName,
    };

    console.log(await prisma.user.create({ data: user }));
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(400);
  }
};
