import { AttachmentLike } from "nodemailer/lib/mailer";
import { Readable } from "nodemailer/lib/xoauth2";
type HTML = string | Buffer | Readable | AttachmentLike | undefined;
export const createEmail = (token: string): HTML => {
  return `<h2>Welcome to Piscord</h2>
            hit the following <a href="http://localhost:3000/verify?token=${token}">link</a> to verify your account`;
};
