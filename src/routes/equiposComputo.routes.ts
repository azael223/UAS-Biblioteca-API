import { Router } from "express";
import { EquipoComputoController } from "../controllers/equipoComputo.controller";

const EquiposComputoRouter = Router();
const _equipoComputoCtrl = new EquipoComputoController();

EquiposComputoRouter.get("/Count", _equipoComputoCtrl.count);
EquiposComputoRouter.get("/:id", _equipoComputoCtrl.getOne);
EquiposComputoRouter.get("/", _equipoComputoCtrl.getAll);
EquiposComputoRouter.post("/Create", _equipoComputoCtrl.create);
EquiposComputoRouter.post("/Update", _equipoComputoCtrl.update);
EquiposComputoRouter.delete("/Delete/:id", _equipoComputoCtrl.delete);

export { EquiposComputoRouter };
