import express from "express";
import {
    Checkout, getKeranjang
} from "../controllers/transaksiController.js";

const route = express.Router();

route.get('/keranjang',getKeranjang);
route.post('/checkout',Checkout);


export default route;