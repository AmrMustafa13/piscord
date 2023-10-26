import { prisma } from "../db";
import {
  ExpressHandler,
  User,
  signupRequest,
  signupResponse,
  loginRequest,
  loginResponse,
} from "../types";
import { generateToken } from "../utils/generateJWT";
import bcrypt from "bcrypt";
export const signupUser: ExpressHandler<signupRequest, signupResponse> = async (
  req,
  res
) => {
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
export const loginUser: ExpressHandler<loginRequest, loginResponse> = async (
  req,
  res
) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({
      message: "Email or password is missing!",
    });
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user)
    return res.status(401).json({
      status: "FAILED",
      message: "user not found",
    });
  const passwordMatch: Boolean = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({
      message: "Incorrect email or password , please again",
    });
  }
  const token = generateToken(
    { userId: user.id },
    process.env.JWT_SECRET,
    process.env.JWT_AGE
  );
  if (!token)
    return res.status(500).json({
      message: "Internal Server Error",
    });
  res.status(200).json({ token });
};
