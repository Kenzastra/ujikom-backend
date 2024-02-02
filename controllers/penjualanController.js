import { Op } from "sequelize";
import Barangs from "../models/barangModel.js";
import Penjualan from "../models/penjualanModel.js";

export const createPenjualan = async(req,res) => {
    try {
        const penjualan = await Penjualan.create();
        res.status(201).json(penjualan)
    } catch (error) {
        console.log(error);
    }
}

export const updatePenjualan = async(req,res) => {
    const {total_harga} = req.body;
    try {
        await Penjualan.create({
            total_harga:total_harga
        });
        res.status(201).json({msg:"Transaksi Berhasil"})
    } catch (error) {
        console.log(error)
    }
}

export const cartPenjualan = async(req,res) => {
    const {id_barang, nama_barang,jumlah_produk} = req.body; 
    let where;
    if(id_barang == null || id_barang == "")
    where = {nama_barang : req.body.nama_barang}
    else where = {id_barang: req.body.id_barang};
    try {
        const cart = await Barangs.findOne({
            attributes:['id_barang','nama_barang','harga_barang'],
            where: where
        });
        res.json(cart);
    } catch (error) {
        console.log(error)
    }
    
}