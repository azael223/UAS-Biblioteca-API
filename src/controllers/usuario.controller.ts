import { UsuarioModel } from "../models/usuario.model";
import { Request, Response } from "express";
import { Controller } from "../lib/Controller";
import { getRepository } from "typeorm";

export class UsuarioController extends Controller {
  Model = UsuarioModel;
  logIn = async (req: Request, res: Response): Promise<Response> => {
    try {
      let data; 
      return res.json(data);
    } catch (err) {
      return res.json(err);
    }
  };
}
