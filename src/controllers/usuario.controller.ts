import { UsuarioModel } from "../models/usuario.model";
import { Request, Response } from "express";
import { Controller } from "../lib/Controller";
import { getRepository } from "typeorm";
import { sign } from "jsonwebtoken";
import { Auth } from "../auth";
import { Error } from "../models/handlers/Error.model";

export class UsuarioController extends Controller {
  Model = UsuarioModel;
  logIn = async (req: Request, res: Response) => {
    try {
      let data = await getRepository(UsuarioModel).findOne(req.body);
      if (data) {
        sign({ data }, Auth.SECRET_KEY, (err: any, token: any) => {
          if (err) {
            return res.status(200).json({ error: err });
          }
          return res.status(200).json({ token, usuario: data });
        });
      } else {
        return res.status(200).json({
          error: <Error>{
            statusCode: 200,
            name: "Error",
            message: `"Usuario" Not Found`,
            code: "NO_DATA_FOUND",
          },
        });
      }
    } catch (err) {
      return res.status(200).json({ error: err });
    }
  };
  verifyToken = async (req: Request, res: Response) => {};
}
