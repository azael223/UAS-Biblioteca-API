import { Router } from "express";
import { RegistroController } from "../controllers/registro.controller";

const RegistroRouter = Router();
const _registroCtrl = new RegistroController();

RegistroRouter.get("/Count", _registroCtrl.count);
RegistroRouter.get("/:id", _registroCtrl.getOne);
RegistroRouter.get("/", _registroCtrl.getAll);
RegistroRouter.post("/Create", _registroCtrl.create);
RegistroRouter.post("/Update", _registroCtrl.update);
RegistroRouter.delete("/Delete/:id", _registroCtrl.delete);

export { RegistroRouter };
