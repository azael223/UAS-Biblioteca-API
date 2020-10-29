import { Router } from "express";
import { RegCubiculosController } from "../controllers/regCubiculos.controller";

const RegCubiculosRouter = Router();
const _regCubiculosCtrl = new RegCubiculosController();

RegCubiculosRouter.get("/:id", _regCubiculosCtrl.getOne);
RegCubiculosRouter.get("/", _regCubiculosCtrl.getAll);
RegCubiculosRouter.post("/addRegCubiculos", _regCubiculosCtrl.add);

export { RegCubiculosRouter };
