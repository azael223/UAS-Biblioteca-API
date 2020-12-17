import { Router } from "express";
import { CubiculoController } from "../controllers/cubiculo.controller";

const CubiculosRouter = Router();
const _cubiculoCtrl = new CubiculoController();

CubiculosRouter.get("/Count", _cubiculoCtrl.count)
CubiculosRouter.get("/:id", _cubiculoCtrl.getOne);
CubiculosRouter.get("/", _cubiculoCtrl.getAll);
CubiculosRouter.post("/Create", _cubiculoCtrl.create);
CubiculosRouter.post("/Update",_cubiculoCtrl.update)
CubiculosRouter.delete("/Delete/:id", _cubiculoCtrl.delete)

export { CubiculosRouter };
