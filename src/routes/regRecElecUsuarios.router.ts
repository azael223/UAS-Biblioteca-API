import { Router } from "express";
import { RegRecElecUsuarioController } from "../controllers/regRecElecUsuario.controller";

const RegRecElecUsuarioRouter = Router();
const _regRecElecUsuarioCtrl = new RegRecElecUsuarioController();

RegRecElecUsuarioRouter.get("/:id", _regRecElecUsuarioCtrl.getOne);
RegRecElecUsuarioRouter.get("/", _regRecElecUsuarioCtrl.getAll);
RegRecElecUsuarioRouter.post("/addRegRecElecUsuario", _regRecElecUsuarioCtrl.add);

export { RegRecElecUsuarioRouter };
