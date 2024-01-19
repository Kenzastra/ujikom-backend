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
    const {nama_barang, stok_barang, harga_barang} = 
}