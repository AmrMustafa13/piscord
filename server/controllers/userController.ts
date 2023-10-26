import { prisma } from "../db";
import asyncHandler from "express-async-handler";
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
import AppError from "../utils/AppError";
export const signupUser: ExpressHandler<signupRequest, signupResponse> =
  asyncHandler(async (req, res, next) => {
    if (
      !req.body.username ||
      !req.body.dateOfBirth ||
      !req.body.email ||
      !req.body.password ||
      !req.body.nickName
    )
      return next(new AppError("All fields are required", 400));
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
    const newUser = await prisma.user.create({ data: user });
    res.status(200).json({
      status: "Success",
      user: newUser,
    });
  });
export const loginUser: ExpressHandler<loginRequest, loginResponse> =
  asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password)
      return next(new AppError("Email or password is missing", 400));
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return next(new AppError("user not found", 401));
    const passwordMatch: Boolean = await bcrypt.compare(
      password,
      user.password
    );
    if (!passwordMatch)
      return next(
        new AppError("Incorrect email or password , please again", 401)
      );
    const token = generateToken(
      { userId: user.id },
      process.env.JWT_SECRET,
      process.env.JWT_AGE
    );
    res.status(200).json({ token });
  });
