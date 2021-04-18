import { Router } from "express";
import { CarreraController } from "../controllers/carrera.controller";

const CarrerasRouter = Router();
const _carreraCtrl = new  CarreraController();

CarrerasRouter.get("/Count", _carreraCtrl.count)
CarrerasRouter.get("/:id", _carreraCtrl.getOne);
CarrerasRouter.get("/", _carreraCtrl.getAll);
CarrerasRouter.post("/Create", _carreraCtrl.create);
CarrerasRouter.post("/Update",_carreraCtrl.update)
CarrerasRouter.delete("/Delete/:id", _carreraCtrl.delete)

export { CarrerasRouter };
