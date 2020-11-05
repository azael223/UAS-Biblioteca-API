import { Router } from "express";
import { RegUsuarioController } from "../controllers/regUsuario.controller";

const RegUsuarioRouter = Router();
const _regUsuarioCtrl = new RegUsuarioController();

RegUsuarioRouter.get("/:id", _regUsuarioCtrl.getOne);
RegUsuarioRouter.get("/", _regUsuarioCtrl.getAll);
RegUsuarioRouter.post("/CreateRegUsuario", _regUsuarioCtrl.create);

export { RegUsuarioRouter };
