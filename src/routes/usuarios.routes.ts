import { Router } from "express";
import { UsuarioController } from "../controllers/usuario.controller";

const UsuariosRouter = Router();
const _usuarioCtrl = new UsuarioController();

// CubiculosRouter.get("/:id", _cubiculoCtrl.getOne);
// CubiculosRouter.get("/", _cubiculoCtrl.getAll);
// CubiculosRouter.post("/Create", _cubiculoCtrl.create);
// CubiculosRouter.post("/Update",_cubiculoCtrl.update)
// CubiculosRouter.delete("/Delete/:id", _cubiculoCtrl.delete)
UsuariosRouter.post("/LogIn", _usuarioCtrl.logIn);

export { UsuariosRouter };
