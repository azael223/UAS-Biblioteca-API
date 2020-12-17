import { Request, Response } from "express";
import { EntityTarget, getRepository } from "typeorm";
import { Error } from "../models/handlers/Error.model";

export class Controller {
  protected Model: any;

  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const data = getRepository(this.Model).create(req.body);
      const result = await getRepository(this.Model).save(data);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(200).json({ error: err });
    }
  };

  getOne = async (req: Request, res: Response): Promise<Response> => {
    try {
      const data = await getRepository(this.Model).findOne(
        Number(req.params["id"])
      );
      return res.status(200).json(data);
    } catch (err) {
      return res.status(200).json({ error: err });
    }
  };

  getAll = async (req: Request, res: Response): Promise<Response> => {
    try {
      let filters: string =
        typeof req.query.filters === "string" ? req.query.filters : "";
      filters = filters ? JSON.parse(filters) : "";
      const data = await getRepository(this.Model).find(filters);
      return res.status(200).json(data);
    } catch (err) {
      return res.status(200).json({ error: err });
    }
  };

  count = async (req: Request, res: Response): Promise<Response> => {
    try {
      let filters: string =
        typeof req.query.filters === "string" ? req.query.filters : "";
      filters = filters ? JSON.parse(filters) : "";
      const data = await getRepository(this.Model).count(filters);
      return res.status(200).json(data);
    } catch (err) {
      return res.status(200).json({ error: err });
    }
  };

  update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const data: any = await getRepository(this.Model).findOne(req.body["id"]);
      Object.keys(req.body).forEach((key) =>
        key in data ? (data[key] = req.body[key]) : ""
      );
      const result = await getRepository(this.Model).save(data);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(200).json({ error: err });
    }
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    try {
      const data = await getRepository(this.Model).findOne(req.params["id"]);
      const result = await getRepository(this.Model).remove(data);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(200).json({ error: err });
    }
  };
}
