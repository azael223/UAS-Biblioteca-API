import { Request, Response } from "express";
import { EntityTarget, getRepository } from "typeorm";

export class Controller {
  protected Model: any;

  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const data = getRepository(this.Model).create(req.body);
      const result = await getRepository(this.Model).save(data);
      return res.json(result);
    } catch (err) {
      return res.json(err);
    }
  };

  getOne = async (req: Request, res: Response): Promise<Response> => {
    try {
      const data = await getRepository(this.Model).findOne(
        Number(req.params["id"])
      );
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
      const data:any = await getRepository(this.Model).findOne(Number(req.body["id"]));
      Object.keys(data).forEach((key)=> key in req.body ? data[key] = req.body[key] : '')
      const result = await getRepository(this.Model).save(data);
      return res.json(result);
    } catch (err) {
      return res.json(err);
    }
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    try {
      const data = await getRepository(this.Model).findOne(req.body);
      const result = await getRepository(this.Model).remove(data);
      return res.json(result);
    } catch (err) {
      return res.json(err);
    }
  };
}
