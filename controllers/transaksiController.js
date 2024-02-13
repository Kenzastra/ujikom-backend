import Details from "../models/detailModel.js";
import Penjualan from "../models/penjualanModel.js";
import Keranjang from "../models/keranjangModel.js";
import Barangs from "../models/barangModel.js";

export const getKeranjang = async(req,res) => {
    const keranjang = await Keranjang.findAll({});
    res.json(keranjang);
}

export const Checkout = async(req,res) => {
    const {total_harga} = req.body;
    const penjualan = await Penjualan.create();

    const id_penjualan = penjualan.id_penjualan;
    res.json(id_penjualan);

    const {id_barang,jumlah_produk,subtotal} = req.body;
    const barang = await Barangs.findOne({
        where:{
            id_barang: req.body.id_barang
        }
    });
    if(!barang) return res.status(404).json({msg:"Barang Tidak Ada"});
    const dataKerajang = req.body.getKeranjang
    try{
        dataKerajang.forEach(data => {
            Details.create({
            id_penjualan:id_penjualan,
            id_barang: id_barang,
            nama_barang: barang.nama_barang,
            jumlah_produk: jumlah_produk,
            subtotal: parseInt(jumlah_produk * barang.harga_barang)
        });
        });
       

        await penjualan
    }
    catch(error){

    }
    
    
}