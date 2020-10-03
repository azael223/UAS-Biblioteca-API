import express from "express";
import { users } from "./users.routes";

const router = express.Router();

/* Routes */
router.use("/users", users);

export { router };
