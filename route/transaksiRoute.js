import express from "express";
import {
    Checkout, createKeranjang, getKeranjang
} from "../controllers/transaksiController.js";
import { getDetail } from "../controllers/detailController.js";

const route = express.Router();

route.get('/detail', getDetail);
route.get('/keranjang',getKeranjang);
route.post('/keranjang',createKeranjang);
route.post('/checkout',Checkout);


export default route;