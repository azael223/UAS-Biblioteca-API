import express from "express";
import { addRegUser,getRegUser,getRegUsers } from "../controllers/reg_users.models";

const regUsers = express.Router();

/* Routes */
regUsers.post("/register", addRegUser);
regUsers.get("/id/:id", getRegUser);
regUsers.get("/all", getRegUsers);

export { regUsers };
