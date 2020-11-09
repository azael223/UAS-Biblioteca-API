import { Router } from "express";
import { CubiculoController } from "../controllers/cubiculo.controller";

const CubiculosRouter = Router();
const _cubiculoCtrl = new CubiculoController();

CubiculosRouter.get("/:id", _cubiculoCtrl.getOne);
CubiculosRouter.get("/", _cubiculoCtrl.getAll);
CubiculosRouter.post("/Create", _cubiculoCtrl.create);
CubiculosRouter.post("/Update",_cubiculoCtrl.update)
CubiculosRouter.delete("/Delete", _cubiculoCtrl.delete)

export { CubiculosRouter };
