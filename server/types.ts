import { RequestHandler } from "express";

export interface User {
  userName: string;
  nickName: string;
  email: string;
  password: string;
  dateOfBirth: string;
}

export type ExpressHandler<RequestBody, ResposeBody> = RequestHandler<
  string,
  Partial<ResposeBody>,
  Partial<RequestBody>,
  any
>;

// auth

export type signupRequest = User;
export type signupResponse = {};
export type loginRequest = Pick<User, "email" | "password">;
export type loginResponse = {};