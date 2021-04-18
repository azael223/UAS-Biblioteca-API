import express from "express";
import { CubiculosRouter } from "./cubiculos.routes";
import { EquiposComputoRouter } from "./equiposComputo.routes";
import { InstitucionRouter } from "./instituciones.routes";
import { RegCubiculosRouter } from "./regCubiculos.routes";
import { RegCubiculosUsuarioRouter } from "./regCubiculosUsuarios.routes";
import { RegRecElecRouter } from "./regRecElec.routes";
import { RegRecElecUsuarioRouter } from "./regRecElecUsuarios.routes";
import { RegUsuarioRouter } from "./regUsuarios.routes";
import { RegistroRouter } from "./registros.routes";
import { UsuariosRouter } from "./usuarios.routes";
import { CarrerasRouter } from "./carrera.routes"
import { Auth } from "../auth";

const Router = express.Router();

/* Routes */
Router.use("/Cubiculos", Auth.verifyToken, CubiculosRouter);
Router.use("/EquiposComputo", Auth.verifyToken, EquiposComputoRouter);
Router.use("/Instituciones", Auth.verifyToken, InstitucionRouter);
Router.use("/RegCubiculos", Auth.verifyToken, RegCubiculosRouter);
Router.use(
  "/RegCubiculosUsuarios",
  Auth.verifyToken,
  RegCubiculosUsuarioRouter
);
Router.use("/RegRecElec", Auth.verifyToken, RegRecElecRouter);
Router.use("/RegRecElecUsuarios", Auth.verifyToken, RegRecElecUsuarioRouter);
Router.use("/RegUsuarios", Auth.verifyToken, RegUsuarioRouter);
Router.use("/Registros", Auth.verifyToken, RegistroRouter);
Router.use("/Carreras", Auth.verifyToken, CarrerasRouter);
Router.use("/Usuarios", UsuariosRouter);

export { Router };

