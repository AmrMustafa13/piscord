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
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const userWithSameEmail = await prisma.user.findUnique({
      where: {
        email: req.body.email,
      },
    });
    if (userWithSameEmail !== null) {
      res.status(409).json({
        errors: [{ msg: "there is user with the  same email" }],
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
        errors: [{ msg: "there is user with the same userName" }],
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
      res.sendStatus(200);
      return;
    } else {
      res.status(500).json({
        errors: [{ msg: "internal server error." }],
      });
      return;
    }
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
    const verificationToken = await prisma.verificationToken.findFirst({
      where: { userId: user.id },
    });
    console.log(verificationToken, user.id);
    if (!verificationToken)
      return next(new AppError("You are already verified!", 400));
    if (!verificationToken.isVerified) {
      return next(new AppError("Verify your account first", 400));
    }
    const token = generateToken(
      { userId: user.id },
      process.env.JWT_SECRET,
      process.env.JWT_AGE
    );
    res.status(200).json({ token });
  });
