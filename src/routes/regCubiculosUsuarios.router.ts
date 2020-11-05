import { Router } from "express";
import { RegCubiculosUsuarioController } from "../controllers/regCubiculosUsuario.controller";

const RegCubiculosUsuarioRouter = Router();
const _regCubiculosUsuarioCtrl = new RegCubiculosUsuarioController();

RegCubiculosUsuarioRouter.get("/:id", _regCubiculosUsuarioCtrl.getOne);
RegCubiculosUsuarioRouter.get("/", _regCubiculosUsuarioCtrl.getAll);
RegCubiculosUsuarioRouter.post("/CreateRegCubiculos", _regCubiculosUsuarioCtrl.create);

export { RegCubiculosUsuarioRouter };
