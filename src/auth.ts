import { NextFunction, Request, Response } from "express";
import { Error } from "./models/handlers/error.model";
import { verify } from "jsonwebtoken";

export class Auth {
  static SECRET_KEY = "AUTH_BI2020UAS";
  static async verifyToken(req: Request, res: Response, next: NextFunction) {
    const bearerHeader = req.headers["authorization"];
    const error: Error = {
      error: {
        statusCode: 401,
        name: "Error",
        message: "Authorization Required",
        code: "AUTHORIZATION_REQUIRED",
      },
    };
    if (!(bearerHeader && typeof bearerHeader === "string")) {
      return res.json(error);
    }
    const bearerToken = bearerHeader.split(" ")[1];
    verify(bearerToken, Auth.SECRET_KEY, (err: any, authData: any) => {
      if (err) {
        return res.json(error);
      } else {
        next();
      }
    });
  }
}
