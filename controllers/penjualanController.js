import Penjualan from "../models/penjualanModel.js";

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