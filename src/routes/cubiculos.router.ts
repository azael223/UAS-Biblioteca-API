import { Router } from "express";
import { CubiculoController } from "../controllers/cubiculo.controller";

const CubiculosRouter = Router();
const _cubiculoCtrl = new CubiculoController();

CubiculosRouter.get("/:id", _cubiculoCtrl.getOne);
CubiculosRouter.get("/", _cubiculoCtrl.getAll);
CubiculosRouter.post("/CreateCubiculo", _cubiculoCtrl.create);

export { CubiculosRouter };
