const crypto = require("crypto");
import bcrypt from "bcrypt";
export const generateVerificationToken = async (): Promise<string> => {
  let token = crypto.randomBytes(32).toString("hex");
  const salt = await bcrypt.genSalt(10);
  token = await bcrypt.hash(token, salt);
  return Buffer.from(token).toString("base64url");
};
