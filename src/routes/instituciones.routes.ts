import { Router } from "express";
import { InstitucionController } from "../controllers/institucion.controller";

const InstitucionRouter = Router();
const _institucionCtrl = new InstitucionController();

InstitucionRouter.get("/:id", _institucionCtrl.getOne);
InstitucionRouter.get("/", _institucionCtrl.getAll);
InstitucionRouter.post("/Create", _institucionCtrl.create);
InstitucionRouter.post("/Update", _institucionCtrl.update);
InstitucionRouter.delete("/Delete", _institucionCtrl.delete);

export { InstitucionRouter };
