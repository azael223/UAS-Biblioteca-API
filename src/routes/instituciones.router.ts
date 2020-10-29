import { Router } from "express";
import { InstitucionController } from "../controllers/institucion.controller";

const InstitucionRouter = Router();
const _institucionCtrl = new InstitucionController();

InstitucionRouter.get("/:id", _institucionCtrl.getOne);
InstitucionRouter.get("/", _institucionCtrl.getAll);
InstitucionRouter.post("/addInstitucion", _institucionCtrl.add);

export { InstitucionRouter };
