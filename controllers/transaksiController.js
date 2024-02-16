import Details from "../models/detailModel.js";
import Penjualan from "../models/penjualanModel.js";
import Keranjang from "../models/keranjangModel.js";
import Barangs from "../models/barangModel.js";

export const getKeranjang = async(req,res) => {
    const keranjang = await Keranjang.findAll({});
    res.json(keranjang);
}

export const createKeranjang = async(req,res) => {
    
    const {id_barang,jumlah_produk,total} = req.body;
    const barang = await Barangs.findOne({
        where:{
            id_barang: req.body.id_barang
        }
    });
    if(!barang) return res.status(404).json({msg:"Barang Tidak Ada"});
    try {
        await Keranjang.create({
            id_barang: id_barang,
            nama_barang: barang.nama_barang,
            jumlah_produk: jumlah_produk,
            subtotal: jumlah_produk * barang.harga_barang
        });
        res.status(200).json({msg:"Berhasil Menambahkan Ke Keranjang"})
    } catch (error) {
        console.log(error)
    }
}

export const Checkout = async(req,res) => {
    const {total_harga} = req.body;
    const penjualan = await Penjualan.create();

    const id_penjualan = penjualan.id_penjualan;

    let dataKeranjang = await Keranjang.findAll();
    
    try{
        for (let index = 0; index < dataKeranjang.length; index++) {
            const keranjang = dataKeranjang[index];
            await Details.create({
                id_penjualan:id_penjualan,
                id_barang: keranjang.id_barang,
                nama_barang: keranjang.nama_barang,
                jumlah_produk: keranjang.jumlah_produk,
                subtotal: keranjang.subtotal
            });

            const barang = await Barangs.findOne({
                where:{
                    id_barang:keranjang.id_barang
                }
            })

            await Barangs.update({
                stok_barang: barang.stok_barang - keranjang.jumlah_produk
            },{
                where:{
                    id_barang: keranjang.id_barang
                }
            })
            return
        }
        
        total_harga = dataKeranjang.reduce(acc, item => acc + item.subtotal,0)

        await Penjualan.update({
            total_harga: total_harga
        },{
            where:{id_penjualan:id_penjualan}
        });
        res.status(200).json({msg:"Transaksi Berhasil"})
    }
    catch(error){
        console.log(error)
    }
    
    
}