import { prisma } from "../db/db";
import asyncHandler from "express-async-handler";
import {
  ExpressHandler,
  signupRequest,
  signupResponse,
  loginRequest,
  loginResponse,
} from "../../types";
import { generateToken } from "../utils/generateJWT";
import { generateVerificationToken } from "../utils/generateVerificationToken";
import { sendEmail } from "../utils/sendEmail";
import { createEmail } from "../utils/messages/generateHtmlMessage";
import bcrypt from "bcrypt";
import AppError from "../utils/AppError";
import { validationResult } from "express-validator";

export const signupUser: ExpressHandler<signupRequest, signupResponse> =
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const allErrors = errors.array();
      res.status(400).json({ status: "failed", error: allErrors[0].msg });
      return;
    }

    const userWithSameEmail = await prisma.user.findUnique({
      where: {
        email: req.body.email,
      },
    });
    if (userWithSameEmail !== null) {
      res.status(409).json({
        status: "failed",
        error: "there is a user with the same email",
      });
      return;
    }
    const userWithSameUserName = await prisma.user.findUnique({
      where: {
        userName: req.body.userName,
      },
    });
    if (userWithSameUserName !== null) {
      res.status(409).json({
        status: "failed",
        error: "there is a user with the same username",
      });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = (await bcrypt.hash(
      req.body.password!,
      salt
    )) as string;

    const user = {
      userName: req.body.userName!,
      dateOfBirth: new Date(req.body.dateOfBirth!),
      email: req.body.email!,
      password: hashedPassword!,
      nickName: req.body.nickName!,
    };

    const newUser = await prisma.user.create({ data: user });
    const token = await generateVerificationToken();
    const tokenDB = {
      token: token,
      userId: newUser.id,
    };

    await prisma.verificationToken.create({
      data: tokenDB,
    });

    const isEmailSent = await sendEmail(
      newUser.email,
      "Account Verification",
      createEmail(token)
    );
    if (isEmailSent) {
      res.status(200).json({ status: "success", data: {} });
      return;
    } else {
      res
        .status(500)
        .json({ status: "failed", error: "internal server error" });
      return;
    }
  });
export const loginUser: ExpressHandler<loginRequest, loginResponse> =
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const allErrors = errors.array();
      res.status(400).json({ status: "failed", error: allErrors[0].msg });
      return;
    }

    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });

    console.log("aaa\n");
    console.log(user);
    if (!user) {
      res.status(400).json({ status: "failed", error: "user is not found" });
      return;
    }

    const passwordMatch: Boolean = await bcrypt.compare(
      password!,
      user.password
    );
    if (!passwordMatch) {
      res.status(400).json({
        status: "failed",
        error: "username or password is not correct",
      });
      return;
    }
    const verificationToken = await prisma.verificationToken.findFirst({
      where: { userId: user.id },
    });
    console.log(verificationToken, user.id);
    if (!verificationToken) {
      res
        .status(400)
        .json({ status: "failed", error: "you are already verified!" });
      return;
    }
    if (!verificationToken.isVerified) {
      res
        .status(400)
        .json({ status: "failed", error: "verify your email first" });
      return;
    }
    const token = generateToken(
      { userId: user.id },
      process.env.JWT_SECRET!,
      process.env.JWT_AGE!
    );
    res.status(200).json({ status: "success", data: { token: token! } });
  });
