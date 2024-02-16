import express from "express";
import {
    Checkout, createKeranjang, getKeranjang
} from "../controllers/transaksiController.js";

const route = express.Router();

route.get('/keranjang',getKeranjang);
route.post('/keranjang',createKeranjang);
route.post('/checkout',Checkout);


export default route;