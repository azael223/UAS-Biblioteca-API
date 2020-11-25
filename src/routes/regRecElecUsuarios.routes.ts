import { Router } from "express";
import { RegRecElecUsuarioController } from "../controllers/regRecElecUsuario.controller";

const RegRecElecUsuarioRouter = Router();
const _regRecElecUsuarioCtrl = new RegRecElecUsuarioController();

RegRecElecUsuarioRouter.get("/:id", _regRecElecUsuarioCtrl.getOne);
RegRecElecUsuarioRouter.get("/", _regRecElecUsuarioCtrl.getAll);
RegRecElecUsuarioRouter.post("/Create", _regRecElecUsuarioCtrl.create);
RegRecElecUsuarioRouter.post("/Update", _regRecElecUsuarioCtrl.update);
RegRecElecUsuarioRouter.delete("/Delete/:id", _regRecElecUsuarioCtrl.delete);

export { RegRecElecUsuarioRouter };
