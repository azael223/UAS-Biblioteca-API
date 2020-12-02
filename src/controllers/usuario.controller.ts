import { UsuarioModel } from "../models/usuario.model";
import { Request, Response } from "express";
import { Controller } from "../lib/Controller";
import { getRepository } from "typeorm";
import { sign } from "jsonwebtoken";
import { Auth } from "../auth";
import { Error } from "../models/handlers/error.model";

export class UsuarioController extends Controller {
  Model = UsuarioModel;
  logIn = async (req: Request, res: Response) => {
    try {
      let data = await getRepository(UsuarioModel).findOne(req.body);
      if (data) {
        sign({ data }, Auth.SECRET_KEY, (err: any, token: any) => {
          return res.json({ token });
        });
      } else {
        return res.json(<Error>{
          error: {
            statusCode: 401,
            name: "Error",
            message: `No "Usuario" Found`,
            code: "NO_DATA_FOUND",
          },
        });
      }
    } catch (err) {
      return res.json(err);
    }
  };
}
