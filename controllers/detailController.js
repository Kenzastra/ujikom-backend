import Details from "../models/detailModel.js";
import Penjualan from "../models/penjualanModel.js";
import Barangs from "../models/barangModel.js";

export const addDetail = async(req,res) => {
    const {id_barang, jumlah_produk,subtotal} = req.body
}