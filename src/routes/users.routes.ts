import express from "express";
import { addUser, getUsers, getUser } from "../controllers/user.controller";

const users = express.Router();

/* Routes */
users.post("/register", addUser);
users.get("/id/:id", getUser);
users.get("/all", getUsers);

export { users };
