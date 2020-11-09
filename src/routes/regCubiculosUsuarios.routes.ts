import { Router } from "express";
import { RegCubiculosUsuarioController } from "../controllers/regCubiculosUsuario.controller";

const RegCubiculosUsuarioRouter = Router();
const _regCubiculosUsuarioCtrl = new RegCubiculosUsuarioController();

RegCubiculosUsuarioRouter.get("/:id", _regCubiculosUsuarioCtrl.getOne);
RegCubiculosUsuarioRouter.get("/", _regCubiculosUsuarioCtrl.getAll);
RegCubiculosUsuarioRouter.post("/Create", _regCubiculosUsuarioCtrl.create);
RegCubiculosUsuarioRouter.post("/Update", _regCubiculosUsuarioCtrl.update);
RegCubiculosUsuarioRouter.delete("/Delete", _regCubiculosUsuarioCtrl.delete);

export { RegCubiculosUsuarioRouter };
