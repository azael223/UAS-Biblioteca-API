import express from "express";
import { CubiculosRouter } from "./cubiculos.router";
import { EquiposComputoRouter } from "./equiposComputo.router";
import { InstitucionRouter } from "./instituciones.router";
import { RegCubiculosRouter } from "./regCubiculos.router";
import { RegCubiculosUsuarioRouter } from "./regCubiculosUsuarios.router";
import { RegRecElecRouter } from "./regRecElec.router";
import { RegRecElecUsuarioRouter } from "./regRecElecUsuarios.router";
import { RegUsuarioRouter } from "./regUsuarios.router";
import { RegistroRouter } from "./registros.router";

const Router = express.Router();

/* Routes */
Router.use("/Cubiculos", CubiculosRouter);
Router.use("/EquiposComputo", EquiposComputoRouter);
Router.use("/Instituciones", InstitucionRouter);
Router.use("/RegCubiculos", RegCubiculosRouter);
Router.use("/RegCubiculosUsuarios", RegCubiculosUsuarioRouter);
Router.use('/RegRecElec', RegRecElecRouter);
Router.use('/RegRecElecUsuarios', RegRecElecUsuarioRouter);
Router.use('/RegUsuarios', RegUsuarioRouter);
Router.use('/Registros', RegistroRouter);

export { Router };
