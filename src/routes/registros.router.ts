import { Router } from "express";
import { RegistroController } from "../controllers/registro.controller";

const RegistroRouter = Router();
const _registroCtrl = new RegistroController();

RegistroRouter.get("/:id", _registroCtrl.getOne);
RegistroRouter.get("/", _registroCtrl.getAll);
RegistroRouter.post("/addRegistro", _registroCtrl.add);

export { RegistroRouter };
