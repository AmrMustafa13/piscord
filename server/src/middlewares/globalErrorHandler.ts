import AppError from "../utils/AppError";
import { Request, Response, NextFunction } from "express";

const sendErrorInProduction = (error: AppError, res: Response): void => {
  res.status(error.statusCode).json({
    status: error.status,
    message: error.message,
  });
};

const sendErrorInDevelopment = (error: AppError, res: Response): void => {
  res.status(error.statusCode).json({
    status: error.status,
    message: error.message,
    stack: error.stack,
  });
};

const invalidJWT = () =>
  new AppError("Invalid Token, please login again..", 401);
const expiredJWT = () =>
  new AppError("Expires Token, please login again..", 401);

const globalErrorHandler = (
  error: AppError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || "Server Error";
  if (process.env.MODE === "Development") sendErrorInDevelopment(error, res);
  else {
    if (error.name === "JsonWebTokenError") invalidJWT();
    if (error.name === "TokenExpiredError") expiredJWT();
    sendErrorInProduction(error, res);
  }
};
export default globalErrorHandler;
