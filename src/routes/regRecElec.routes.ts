import { Router } from "express";
import { RegRecElecController } from "../controllers/regRecElec.controller";

const RegRecElecRouter = Router();
const _regRecElecCtrl = new RegRecElecController();

RegRecElecRouter.get("/:id", _regRecElecCtrl.getOne);
RegRecElecRouter.get("/", _regRecElecCtrl.getAll);
RegRecElecRouter.post("/Create", _regRecElecCtrl.create);
RegRecElecRouter.post("/Update", _regRecElecCtrl.update)
RegRecElecRouter.delete("/Delete/:id", _regRecElecCtrl.delete)

export { RegRecElecRouter };
