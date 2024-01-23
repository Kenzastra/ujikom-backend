import express from "express";
import {
    addPenjualan
} from "../controllers/penjualanController.js";

const route = express.Router();

route.post('/penjualan',addPenjualan)

export default route;