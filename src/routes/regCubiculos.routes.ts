import { Router } from "express";
import { RegCubiculosController } from "../controllers/regCubiculos.controller";

const RegCubiculosRouter = Router();
const _regCubiculosCtrl = new RegCubiculosController();

RegCubiculosRouter.get("/:id", _regCubiculosCtrl.getOne);
RegCubiculosRouter.get("/", _regCubiculosCtrl.getAll);
RegCubiculosRouter.post("/Create", _regCubiculosCtrl.create);
RegCubiculosRouter.post("/Update", _regCubiculosCtrl.update);
RegCubiculosRouter.delete("/Delete/:id", _regCubiculosCtrl.delete);

export { RegCubiculosRouter };
