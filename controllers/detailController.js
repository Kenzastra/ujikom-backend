import Details from "../models/detailModel.js";
import Penjualan from "../models/penjualanModel.js";
import Barangs from "../models/barangModel.js";

export const getDetail = async(req,res) => {
    try {
        const response = await Details.findAll();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

export const addDetail = async(req,res) => {

    const {id_penjualan,id_barang, jumlah_produk,subtotal} = req.body;
    if(id_barang == "" || id_barang == null,jumlah_produk == "" || jumlah_produk == null) return res.status(400).json({msg:"KOlom Masih Kosong"});

    const barang = await Barangs.findOne({
        where:{
            id_barang : req.body.id_barang
        }
    });

    try {
        await Details.create({
            id_barang : id_barang,
            jumlah_produk : jumlah_produk,
            subtotal : barang.harga_barang * jumlah_produk
        });

        await Barangs.update({
            stok_barang: barang.stok_barang - jumlah_produk
        },{
            where:{
                id_barang:req.body.id_barang
            }
        })
        res.status(201).json({msg:"Transaksi Berhasil"});
    } catch (error) {
        console.log(error);
    }

}