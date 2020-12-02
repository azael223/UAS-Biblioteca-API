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
import { Auth } from "../auth";

const Router = express.Router();

/* Routes */
Router.use("/Cubiculos", Auth.verifyToken, CubiculosRouter);
Router.use("/EquiposComputo", EquiposComputoRouter);
Router.use("/Instituciones", InstitucionRouter);
Router.use("/RegCubiculos", RegCubiculosRouter);
Router.use("/RegCubiculosUsuarios", RegCubiculosUsuarioRouter);
Router.use("/RegRecElec", RegRecElecRouter);
Router.use("/RegRecElecUsuarios", RegRecElecUsuarioRouter);
Router.use("/RegUsuarios", RegUsuarioRouter);
Router.use("/Registros", RegistroRouter);
Router.use("/Usuarios", UsuariosRouter);

export { Router };
