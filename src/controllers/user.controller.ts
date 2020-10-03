import { User } from "../models/user.model";
import { Request, Response } from "express";
import { getRepository } from "typeorm";

const addUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const newUser = getRepository(User).create(req.body);
    const results = await getRepository(User).save(newUser);
    return res.json(results);
  } catch (err) {
    return res.json(err);
  }
};

const getUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const user = await getRepository(User).findOne(req.params["id"]);
    return res.json(user);
  } catch (err) {
    return res.json(err);
  }
};

const getUsers = async (req: Request, res: Response): Promise<Response> => {
  try {
    const users = await getRepository(User).find();
    return res.json(users);
  } catch (err) {
    return res.json(err);
  }
};

export { addUser, getUser, getUsers };
