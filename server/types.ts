import { RequestHandler } from "express";
import { ValidationError } from "express-validator";

export interface User {
  userName: string;
  nickName: string;
  email: string;
  password: string;
  dateOfBirth: string;
}

export type ExpressHandler<RequestBody, ResposeBody> = RequestHandler<
  any,
  Partial<ResposeBody>,
  Partial<RequestBody>,
  any
>;

export type error = {
  error: string;
  status: string;
};

// auth

export type signupRequest = User;
export type signupResponse = { status: string; data:{} } | error;
export type loginRequest = Pick<User, "email" | "password">;
export type loginResponse = { status: string; data: { token: string } }| error;