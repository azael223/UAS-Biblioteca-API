import { Request, Response } from "express";
import { EntityTarget, getRepository } from "typeorm";

export class Controller {
  protected Model: any;

  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const data = getRepository(this.Model).create(req.body);
      const results = await getRepository(this.Model).save(data);
      return res.json(results);
    } catch (err) {
      return res.json(err);
    }
  };

  getOne = async (req: Request, res: Response): Promise<Response> => {
    try {
      const data = await getRepository(this.Model).findOne(req.params);
      return res.json(data);
    } catch (err) {
      return res.json(err);
    }
  };

  getAll = async (req: Request, res: Response): Promise<Response> => {
    try {
      const data = await getRepository(this.Model).find();
      return res.json(data);
    } catch (err) {
      return res.json(err);
    }
  };

  update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const data = await getRepository(this.Model).find();
      return res.json(data);
    } catch (err) {
      return res.json(err);
    }
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    try {
      const data = await getRepository(this.Model).find();
      return res.json(data);
    } catch (err) {
      return res.json(err);
    }
  };
}
