import { RequestHandler } from "express";
import { prisma } from "../db/db";
import AppError from "../utils/AppError";
export const verifyAccount: RequestHandler = async (req, res, next) => {
  const token = req.query.token + "";
  const hashedToken = await prisma.verificationToken.findUnique({
    where: { token: token },
  });
  if (!hashedToken) return next(new AppError("Invalid Token", 400));
  if (hashedToken.isVerified) {
    return next(new AppError("You are already verified", 409));
  } else {
    
    await prisma.verificationToken.update({
      where: { token: token },
      data: {
        isVerified: true,
      },
    });

    res.status(200).json({
      status:"Success",
      message: "Your account has been verified",
    });
  }
};
