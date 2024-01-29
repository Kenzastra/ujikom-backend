import express from "express";
import { createPenjualan } from "../controllers/penjualanController.js";
import { addDetail, getDetail } from "../controllers/detailController.js";

const route = express.Router();

route.get("/detail",getDetail);
route.post("/transaksi",createPenjualan);
route.post("/detail",addDetail);

export default route;