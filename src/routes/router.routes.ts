import express from "express";
import { users } from "./users.routes";
import { regUsers } from "./reg_users.routes"

const router = express.Router();

/* Routes */
router.use("/users", users);
router.use("/regusers",regUsers)

export { router };
