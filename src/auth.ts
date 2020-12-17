import { NextFunction, Request, Response } from "express";
import { Error } from "./models/handlers/Error.model";
import { verify } from "jsonwebtoken";
export class Auth {
  static SECRET_KEY = "AUTH_BI2020UAS";

  static error: Error = {
    statusCode: 401,
    name: "Error",
    message: "Authorization Required",
    code: "AUTHORIZATION_REQUIRED",
  };

  static async verifyToken(req: Request, res: Response, next: NextFunction) {
    const bearerHeader = req.headers["authorization"];
    if (!(bearerHeader && typeof bearerHeader === "string")) {
      return res.status(401).json({ error: Auth.error });
    }
    const bearerToken = bearerHeader.split(" ")[1];
    verify(bearerToken, Auth.SECRET_KEY, (err: any, authData: any) => {
      if (err) {
        return res.status(401).json({ error: Auth.error });
      } else {
        next();
      }
    });
  }
}
