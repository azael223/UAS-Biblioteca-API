import { Router } from "express";
import { RegUsuarioController } from "../controllers/regUsuario.controller";

const RegUsuarioRouter = Router();
const _regUsuarioCtrl = new RegUsuarioController();

RegUsuarioRouter.get("/:id", _regUsuarioCtrl.getOne);
RegUsuarioRouter.get("/", _regUsuarioCtrl.getAll);
RegUsuarioRouter.post("/Create", _regUsuarioCtrl.create);
RegUsuarioRouter.post("/Update", _regUsuarioCtrl.update);
RegUsuarioRouter.delete("/Delete/:id", _regUsuarioCtrl.delete);

export { RegUsuarioRouter };
