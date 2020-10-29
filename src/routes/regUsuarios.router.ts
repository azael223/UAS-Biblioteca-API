import { Router } from "express";
import { RegUsuarioController } from "../controllers/regUsuario.controller";

const RegUsuarioRouter = Router();
const _regUsuarioCtrl = new RegUsuarioController();

RegUsuarioRouter.get("/:id", _regUsuarioCtrl.getOne);
RegUsuarioRouter.get("/", _regUsuarioCtrl.getAll);
RegUsuarioRouter.post("/addRegUsuario", _regUsuarioCtrl.add);

export { RegUsuarioRouter };
