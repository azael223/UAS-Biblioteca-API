import { Router } from "express";
import { RegRecElecController } from "../controllers/regRecElec.controller";

const RegRecElecRouter = Router();
const _regRecElecCtrl = new RegRecElecController();

RegRecElecRouter.get("/:id", _regRecElecCtrl.getOne);
RegRecElecRouter.get("/", _regRecElecCtrl.getAll);
RegRecElecRouter.post("/CreateRegRecElec", _regRecElecCtrl.create);

export { RegRecElecRouter };
