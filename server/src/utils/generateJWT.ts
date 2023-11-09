import jwt from "jsonwebtoken";

export const generateToken = (
  payload: any,
  secret: string,
  expiresIn: string
): string  => {
 return jwt.sign(payload, secret, { expiresIn });
};
