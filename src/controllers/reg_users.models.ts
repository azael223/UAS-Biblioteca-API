import { RegUsers } from "../models/reg_users.model";
import { Request, Response } from "express";
import { getRepository } from "typeorm";

const addRegUser = async (req: Request, res: Response): Promise<Response> => {
    try {
      const newRegUsers = getRepository(RegUsers).create(req.body);
      const results = await getRepository(RegUsers).save(newRegUsers);
      return res.json(results);
    } catch (err) {
      return res.json(err);
    }
  };
  
  const getRegUser = async (req: Request, res: Response): Promise<Response> => {
    try {
      const regUsers = await getRepository(RegUsers).findOne(req.params["id"]);
      return res.json(regUsers);
    } catch (err) {
      return res.json(err);
    }
  };
  
  const getRegUsers = async (req: Request, res: Response): Promise<Response> => {
    try {
      const users = await getRepository(RegUsers).find();
      return res.json(users);
    } catch (err) {
      return res.json(err);
    }
  };
export { addRegUser, getRegUser, getRegUsers }