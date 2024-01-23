import express from "express";
import {
    getBarang,
    addBarang
} from "../controllers/barangController.js";

const route = express.Router();

route.get("/barang",getBarang);
route.post("/barang",addBarang);

export default route;