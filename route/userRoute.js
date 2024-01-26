import express from "express";
import {
    getUser,
    addUser,
    updateUser,
    deleteUser,
    getUserById
} from "../controllers/userController.js";

const route = express.Router()

route.get("/user", getUser);
route.get("/user/:id_user",getUserById)
route.post("/user", addUser);
route.patch("/user/:id_user", updateUser);
route.delete("/user/:id_user",deleteUser);

export default route;