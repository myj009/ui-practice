import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const secret = "abcd@4321";

export interface CustomRequest extends Request {
  user?: any;
}

const userAuth = (req: CustomRequest, res: Response, next: NextFunction) => {
  const token = req.headers["authorization"];
  if (token === undefined) {
    return res.status(401).send("Authentication failed");
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).send("Authentication failed");
    }
    req.user = decoded;
    next();
  });
};

export default userAuth;
