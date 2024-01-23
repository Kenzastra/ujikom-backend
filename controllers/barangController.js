import Barangs from "../models/barangModel.js";

export const getBarang = async (req,res) => {
    try {
        const response = await Barangs.findAll();
        res.json(response);
    } catch (error) {
        console.log(error)
    }
}

export const addBarang = async (req,res) => {
    const {nama_barang, stok_barang, harga_barang,satuan_barang} = req.body;
    if(!nama_barang || !stok_barang || !harga_barang || !satuan_barang) return res.status(404).json({msg:'Kolom Masih Kosong'});
    try {
        await Barangs.create({
            nama_barang:nama_barang,
            stok_barang:stok_barang,
            harga_barang:harga_barang,
            satuan_barang:satuan_barang
        });
        res.status(201).json({msg:"Barang Berhasil Ditambahkan"});
    } catch (error) {
        console.log(error)
    }
}

export const updateBarang = async (req,res) => {
    const barang = await Barangs.findOne({
        where:{
            id_barang:req.params.id_barang
        }
    });
    if(!barang) return res.status(404).json({msg:"Data Tidak Ditemukan"});
    const {nama_barang, stok_barang, harga_barang,satuan_barang} = req.body;
    try {
        await Barangs.update({
            nama_barang:nama_barang,
            stok_barang:stok_barang,
            harga_barang:harga_barang,
            satuan_barang:satuan_barang
        },{
            where:{
                id_barang:req.params.id_barang
            }
        });
        res.status(200).json({msg:"Barang Berhasil Diupdate"});
    } catch (error) {
        console.log(error)
    }
}

export const deleteBarang = async (req,res) => {
    const barang = await Barangs.findOne({
        where:{
            id_barang:req.params.id_barang
        }
    });
    if(!barang) return res.status(404).json({msg:"Data Tidak Ditemukan"});
    try {
        await Barangs.destroy({
            where:{
                id_barang:req.params.id_barang
            }
        });
        res.status(201).json({msg:"Barang Berhasil Dihapus"});
    } catch (error) {
        console.log(error)
    }
}