import { RequestHandler } from "express";

export interface User {
  username: string;
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
