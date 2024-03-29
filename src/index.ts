import express from "express";
import cors from "cors";
import morgan from "morgan";
import { createConnection } from "typeorm";
import { Request, Response } from "express-serve-static-core";
import { Router } from "./routes/router.routes";

/*  */
const conn = createConnection();
const app = express();

/* Middlewares */
app.use(express.json());
app.use(cors());
app.use(morgan("common"));
app.use('/api',Router);

/* Config */
const config = {
  host: "0.0.0.0",
  port: 8000,
};

/* Server */
app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});
app.listen(config.port, config.host, () => {
  console.log(`Server listening at http://${config.host}:${config.port}/`);
});
