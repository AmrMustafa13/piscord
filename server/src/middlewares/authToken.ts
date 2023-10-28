import jwt, { JwtPayload } from "jsonwebtoken";
import { ExpressHandler } from "../../types";

export const authToken: ExpressHandler<{},{}> = (req, res, next) => {
  const header = req.headers["authorization"];
  const token = header && header.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "you need to sign in" });
  } else {
    jwt.verify(token, process.env.JWT_SECRET!, (err, user) => {
      if (err) {
        res.status(403).json({ message: "token is no longer valid" });
      } else {
        res.locals.userId = (user as jwt.JwtPayload).userId;
        next();
      }
    });
  }
};
