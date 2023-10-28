import jwt from "jsonwebtoken";

export const generateToken = (
  payload: any,
  secret: string | undefined,
  expiresIn: string | undefined
): string | undefined => {
  if (!payload || !secret || !expiresIn) return;
  return jwt.sign(payload, secret, { expiresIn });
};
