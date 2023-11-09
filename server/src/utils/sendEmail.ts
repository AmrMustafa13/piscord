import nodemailer from "nodemailer";
import { AttachmentLike } from "nodemailer/lib/mailer";
import { Readable } from "nodemailer/lib/xoauth2";
type HTML = string | Buffer | Readable | AttachmentLike | undefined;
export const sendEmail = async (
  userEmail: string,
  subject: string,
  htmlTemplate: HTML
): Promise<boolean> => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });
    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: userEmail,
      subject: subject,
      html: htmlTemplate,
    };
    const info = await transporter.sendMail(mailOptions);
    console.log("Email has been sent successfully!" + info);
    return true;
  } catch (err) {
    console.log("Internal Server Error" + err);
    return false;
  }
};
