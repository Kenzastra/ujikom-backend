import express from "express";
import { cartPenjualan, createPenjualan } from "../controllers/penjualanController.js";
import { addDetail, getDetail } from "../controllers/detailController.js";

const route = express.Router();

route.get("/detail",getDetail);
route.post("/cart",cartPenjualan);
route.post("/transaksi",createPenjualan);
route.post("/detail",addDetail);

export default route;