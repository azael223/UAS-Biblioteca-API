import { Router } from "express";
import { EquipoComputoController } from "../controllers/equipoComputo.controller";

const EquiposComputoRouter = Router();
const _equipoComputoCtrl = new EquipoComputoController();

EquiposComputoRouter.get("/:id", _equipoComputoCtrl.getOne);
EquiposComputoRouter.get("/", _equipoComputoCtrl.getAll);
EquiposComputoRouter.post("/addEquipoComputo", _equipoComputoCtrl.add);

export { EquiposComputoRouter };
